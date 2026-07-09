"use client";
import React, { useState } from "react";
import { updateOrderStatus, updateOrderMessageStatus } from "./actions";
import { Check, Clock, XCircle, Truck, ChevronDown, Search, Filter, MessageCircle } from "lucide-react";

export const OrderList = ({ initialOrders }: { initialOrders: any[] }) => {
  const [orders, setOrders] = useState(initialOrders);
  const [loadingId, setLoadingId] = useState<string | null>(null);
  
  // Filtreleme stateleri
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");

  const handleStatusChange = async (orderId: string, newStatus: string) => {
    setLoadingId(orderId);
    const res = await updateOrderStatus(orderId, newStatus);
    if (res.success) {
      setOrders(orders.map(o => o.id === orderId ? { ...o, status: newStatus } : o));
    } else {
      alert("Durum güncellenemedi!");
    }
    setLoadingId(null);
  };

  const handleMessageSent = async (orderId: string) => {
    // Arayüzde hemen güncelleyelim, daha hızlı tepki vermesi için
    setOrders(orders.map(o => o.id === orderId ? { ...o, isMessageSent: true } : o));
    await updateOrderMessageStatus(orderId, true);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "PENDING": return <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-bold"><Clock size={12}/> Bekliyor</span>;
      case "PAID": return <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold"><Check size={12}/> Ödendi</span>;
      case "SHIPPED": return <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold"><Truck size={12}/> Kargolandı</span>;
      case "FAILED": return <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold"><XCircle size={12}/> Başarısız</span>;
      default: return <span>{status}</span>;
    }
  };

  const filteredOrders = orders.filter((order) => {
    const matchesSearch = 
      order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.orderNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customerPhone.includes(searchTerm);
      
    const matchesStatus = statusFilter === "ALL" || order.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden flex flex-col">
      <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Son Siparişler</h2>
          <p className="text-slate-500 text-sm">Gelen tüm siparişleri buradan yönetin.</p>
        </div>
        
        {/* Arama ve Filtreleme */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={16} className="text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="İsim, Tel, Sipariş No..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 w-full sm:w-64"
            />
          </div>
          
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Filter size={16} className="text-slate-400" />
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="pl-9 pr-8 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500 appearance-none bg-white w-full sm:w-auto"
            >
              <option value="ALL">Tüm Durumlar</option>
              <option value="PENDING">Bekleyenler</option>
              <option value="PAID">Ödenenler</option>
              <option value="SHIPPED">Kargolananlar</option>
              <option value="FAILED">İptal Edilenler</option>
            </select>
            <div className="absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none">
              <ChevronDown size={14} className="text-slate-400" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
              <th className="p-4 font-semibold">Sipariş / Tarih</th>
              <th className="p-4 font-semibold">Müşteri Bilgileri</th>
              <th className="p-4 font-semibold">Sepet Tutarı</th>
              <th className="p-4 font-semibold">Durum</th>
              <th className="p-4 font-semibold">İşlem</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {filteredOrders.length === 0 ? (
              <tr><td colSpan={5} className="p-8 text-center text-slate-400">Aranan kriterlere uygun sipariş bulunamadı.</td></tr>
            ) : (
              filteredOrders.map((order: any) => (
                <tr key={order.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 align-top">
                    <div className="font-mono text-xs text-slate-800 font-bold mb-1">{order.orderNumber}</div>
                    <div className="text-xs text-slate-400">{new Date(order.createdAt).toLocaleString("tr-TR")}</div>
                  </td>
                  <td className="p-4 align-top">
                    <div className="font-semibold text-slate-800">{order.customerName}</div>
                    <div className="text-slate-500 text-xs mb-2 flex flex-col gap-1 mt-1">
                      <span>{order.customerEmail}</span>
                      <div className="flex items-center gap-2">
                        <span>{order.customerPhone}</span>
                        <a 
                          onClick={() => handleMessageSent(order.id)}
                          href={`https://wa.me/${order.customerPhone.replace(/[^0-9]/g, '')}?text=Merhaba%20${encodeURIComponent(order.customerName)},%20Ataseven%20Yaylası'ndan%20verdiğiniz%20${order.orderNumber}%20numaralı%20siparişiniz%20alınmıştır.%20`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center justify-center text-white rounded-full w-7 h-7 transition-all shadow-sm ${order.isMessageSent ? 'bg-emerald-500 hover:bg-emerald-600' : 'bg-rose-500 hover:bg-rose-600 animate-pulse'}`}
                          title={order.isMessageSent ? "Mesaj Gönderildi" : "Mesaj Gönderilmedi! Tıkla ve Gönder"}
                        >
                          <MessageCircle size={14} />
                        </a>
                      </div>
                    </div>
                    <div className="text-slate-600 text-xs leading-relaxed max-w-[250px] bg-slate-50 p-2 rounded-md border border-slate-100">
                      {order.customerAddress}
                    </div>
                  </td>
                  <td className="p-4 align-top">
                    <div className="font-bold text-slate-800 text-base">{order.totalAmount.toLocaleString("tr-TR")} ₺</div>
                    <div className="mt-2 space-y-1">
                      {Array.isArray(order.items) && order.items.map((item: any, idx: number) => (
                        <div key={idx} className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded inline-block mr-1 mb-1">
                          {item.quantity}x {item.name}
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="p-4 align-top">
                    {getStatusBadge(order.status)}
                  </td>
                  <td className="p-4 align-top">
                    <div className="relative inline-block w-32">
                      <select
                        disabled={loadingId === order.id}
                        value={order.status}
                        onChange={(e) => handleStatusChange(order.id, e.target.value)}
                        className="appearance-none w-full bg-white border border-slate-200 text-slate-700 py-2 px-3 pr-8 rounded-lg text-xs font-semibold focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 cursor-pointer disabled:opacity-50"
                      >
                        <option value="PENDING">Bekliyor</option>
                        <option value="PAID">Ödendi</option>
                        <option value="SHIPPED">Kargolandı</option>
                        <option value="FAILED">İptal/Başarısız</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
                        <ChevronDown size={14} />
                      </div>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
