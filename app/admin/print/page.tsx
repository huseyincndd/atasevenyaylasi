import React from "react";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

export const dynamic = 'force-dynamic';

export default async function PrintLabelsPage({ searchParams }: { searchParams: Promise<{ ids?: string }> }) {
  const { ids } = await searchParams;
  
  if (!ids) {
    return <div className="p-10 text-center">Yazdırılacak sipariş seçilmedi.</div>;
  }

  const orderIds = ids.split(",");

  const orders = await prisma.order.findMany({
    where: {
      id: { in: orderIds }
    },
    orderBy: { createdAt: "desc" }
  });

  if (orders.length === 0) {
    notFound();
  }

  return (
    <div className="bg-white text-black font-sans print-wrapper">
      {/* Yazdırma Yönergeleri (Sadece Ekranda Görünür, Çıktıda Gizlenir) */}
      <div className="print-hidden p-4 bg-amber-50 text-amber-800 text-center font-bold mb-4 border-b border-amber-200">
        Bu sayfayı yazdırmak için klavyenizden <kbd className="bg-amber-100 px-2 py-1 rounded">Ctrl + P</kbd> tuşlarına basın (Mac için Cmd + P).
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 print-grid">
        {orders.map((order) => (
          <div key={order.id} className="border-2 border-black p-6 rounded-lg break-inside-avoid print-card flex flex-col justify-between" style={{ minHeight: "250px" }}>
            
            <div className="flex justify-between items-start mb-4 border-b border-gray-300 pb-2">
              <div>
                <h1 className="font-serif font-bold text-xl italic tracking-widest uppercase">ATASEVEN</h1>
                <p className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Kımız & At Sütü</p>
              </div>
              <div className="text-right">
                <p className="font-mono font-bold text-sm">{order.orderNumber}</p>
                <p className="text-xs text-gray-500">{new Date(order.createdAt).toLocaleDateString("tr-TR")}</p>
              </div>
            </div>

            <div className="flex-1 mt-2">
              <h2 className="font-bold text-lg mb-1">ALICI:</h2>
              <p className="font-bold text-xl uppercase mb-1">{order.customerName}</p>
              <p className="font-semibold text-lg mb-4">{order.customerPhone}</p>
              
              <p className="text-sm leading-relaxed border border-dashed border-gray-400 p-3 rounded bg-gray-50 uppercase font-medium">
                {order.customerAddress}
              </p>
            </div>

            <div className="mt-4 pt-2 border-t border-gray-300 flex justify-between text-xs font-bold text-gray-500">
              <span>Gönderici: Ataseven Yaylası - Konya</span>
              <span>Koli Adedi: 1</span>
            </div>
            
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          body { background: white; margin: 0; padding: 0; }
          .print-hidden { display: none !important; }
          .print-wrapper { width: 100%; }
          .print-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1cm; padding: 0; }
          .print-card { border: 2px solid black; padding: 1cm; border-radius: 12px; page-break-inside: avoid; margin-bottom: 0.5cm; }
          @page { margin: 1cm; }
        }
      `}} />

      {/* Sayfa yüklendiğinde otomatik yazdır iletişim kutusunu aç */}
      <script dangerouslySetInnerHTML={{__html: `
        window.onload = function() {
          setTimeout(function() { window.print(); }, 500);
        }
      `}} />
    </div>
  );
}
