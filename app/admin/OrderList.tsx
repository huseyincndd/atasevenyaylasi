"use client";
import React, { useState } from "react";
import { updateOrderStatus, updateOrderMessageStatus } from "./actions";
import { Check, Clock, XCircle, Truck, ChevronDown, Search, Filter, MessageCircle, Eye, Download, Printer } from "lucide-react";
import Link from "next/link";

export const OrderList = ({ initialOrders }: { initialOrders: any[] }) => {
  const [orders, setOrders] = useState(initialOrders);
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [selectedOrders, setSelectedOrders] = useState<string[]>([]);
  
  // Filtreleme stateleri
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");

  const toggleOrderSelection = (id: string) => {
    setSelectedOrders(prev => prev.includes(id) ? prev.filter(oId => oId !== id) : [...prev, id]);
  };

  const toggleAllSelection = (filteredOrderIds: string[]) => {
    if (selectedOrders.length === filteredOrderIds.length) {
      setSelectedOrders([]);
    } else {
      setSelectedOrders(filteredOrderIds);
    }
  };

  const exportToExcel = () => {
    if (selectedOrders.length === 0) return;
    
    // Yalnızca seçili siparişleri filtrele
    const ordersToExport = orders.filter(o => selectedOrders.includes(o.id));
    
    // CSV Başlıkları
    const headers = ["Siparis_No", "Tarih", "Musteri_Adi", "Telefon", "E-Posta", "Toplam_Tutar", "Adres"];
    
    // Verileri CSV formatına dönüştür
    const csvRows = ordersToExport.map(order => {
      const date = new Date(order.createdAt).toLocaleDateString("tr-TR");
      const name = `"${order.customerName.replace(/"/g, '""')}"`;
      const phone = `"${order.customerPhone}"`;
      const email = `"${order.customerEmail}"`;
      const amount = order.totalAmount;
      const address = `"${order.customerAddress.replace(/"/g, '""').replace(/\n/g, ' ')}"`;
      
      return [order.orderNumber, date, name, phone, email, amount, address].join(",");
    });
    
    // BOM (Türkçe karakter desteği için) + CSV İçeriği
    const csvContent = "\uFEFF" + headers.join(",") + "\n" + csvRows.join("\n");
    
    // İndirme işlemi
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `Siparisler_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
      
      {/* Toplu İşlem Çubuğu */}
      {selectedOrders.length > 0 && (
        <div className="bg-emerald-50 border-b border-emerald-100 p-4 flex flex-col sm:flex-row items-center justify-between gap-4 animate-in fade-in slide-in-from-top-2">
          <div className="text-emerald-800 font-semibold text-sm">
            {selectedOrders.length} sipariş seçildi
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button 
              onClick={exportToExcel}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors shadow-sm"
            >
              <Download size={16} /> Excel İndir
            </button>
            <Link 
              href={`/admin/print?ids=${selectedOrders.join(',')}`}
              target="_blank"
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors shadow-sm"
            >
              <Printer size={16} /> Etiket Yazdır
            </Link>
          </div>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
              <th className="p-4 w-10">
                <input 
                  type="checkbox" 
                  checked={filteredOrders.length > 0 && selectedOrders.length === filteredOrders.length}
                  onChange={() => toggleAllSelection(filteredOrders.map(o => o.id))}
                  className="w-4 h-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                />
              </th>
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
                <tr key={order.id} className={`hover:bg-slate-50/50 transition-colors ${selectedOrders.includes(order.id) ? 'bg-emerald-50/30' : ''}`}>
                  <td className="p-4 align-middle">
                    <input 
                      type="checkbox" 
                      checked={selectedOrders.includes(order.id)}
                      onChange={() => toggleOrderSelection(order.id)}
                      className="w-4 h-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                    />
                  </td>
                  <td className="p-4 align-top">
                    <div className="font-mono text-xs text-slate-800 font-bold mb-1">{order.orderNumber}</div>
                    <div className="text-xs text-slate-400">{new Date(order.createdAt).toLocaleString("tr-TR")}</div>
                  </td>
                  <td className="p-4 align-top">
                    <div className="font-semibold text-slate-800">{order.customerName}</div>
                    <div className="text-slate-500 text-xs">{order.customerPhone}</div>
                  </td>
                  <td className="p-4 align-top">
                    <div className="font-bold text-slate-800 text-base">{order.totalAmount.toLocaleString("tr-TR")} ₺</div>
                    <div className="text-xs text-slate-400 mt-1">{Array.isArray(order.items) ? order.items.length : 0} Çeşit Ürün</div>
                  </td>
                  <td className="p-4 align-top">
                    {getStatusBadge(order.status)}
                  </td>
                  <td className="p-4 align-top">
                    <div className="flex flex-col gap-2">
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
                          <option value="FAILED">İptal/Baş.sız</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
                          <ChevronDown size={14} />
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mt-1">
                        <a 
                          onClick={() => handleMessageSent(order.id)}
                          href={`https://wa.me/${order.customerPhone.replace(/[^0-9]/g, '')}?text=Merhaba%20${encodeURIComponent(order.customerName)},%20Ataseven%20Yaylası'ndan%20verdiğiniz%20${order.orderNumber}%20numaralı%20siparişiniz%20alınmıştır.%20`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center justify-center text-white rounded-md px-2 py-1.5 text-xs font-semibold transition-all shadow-sm w-full ${order.isMessageSent ? 'bg-emerald-500 hover:bg-emerald-600' : 'bg-rose-500 hover:bg-rose-600 animate-pulse'}`}
                          title={order.isMessageSent ? "Mesaj Gönderildi" : "Mesaj Gönderilmedi! Tıkla ve Gönder"}
                        >
                          <MessageCircle size={14} className="mr-1" />
                          {order.isMessageSent ? 'Gönderildi' : 'WhatsApp'}
                        </a>
                      </div>

                      <div className="flex items-center gap-2">
                        <Link 
                          href={`/admin/orders/${order.id}`}
                          className="inline-flex items-center justify-center bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-md px-2 py-1.5 text-xs font-semibold transition-colors shadow-sm w-full border border-blue-200"
                        >
                          <Eye size={14} className="mr-1" />
                          İncele
                        </Link>
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
