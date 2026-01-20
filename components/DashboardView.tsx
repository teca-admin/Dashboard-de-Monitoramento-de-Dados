
import React from 'react';
import { SheetRow } from '../types';

interface DashboardViewProps {
  data: SheetRow[];
  loading: boolean;
}

const DashboardView: React.FC<DashboardViewProps> = ({ data, loading }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map(i => (
          <div key={i} className="h-72 bg-white border border-slate-200 animate-pulse"></div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center py-32 border border-dashed border-slate-200 bg-slate-50/50">
      <div className="w-12 h-12 bg-slate-100 flex items-center justify-center mb-4 border border-slate-200">
        <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </div>
      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Módulo de Análise Gráfica Suspenso</p>
    </div>
  );
};

export default DashboardView;
