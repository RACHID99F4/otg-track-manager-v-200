
import React from 'react';
import { AlertTriangle, Info, X, Check } from 'lucide-react';

interface ConfirmDialogProps {
    isOpen: boolean;
    title: string;
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
    type?: 'danger' | 'info';
    confirmLabel?: string;
    cancelLabel?: string;
}

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
    isOpen,
    title,
    message,
    onConfirm,
    onCancel,
    type = 'danger',
    confirmLabel,
    cancelLabel
}) => {
    if (!isOpen) return null;

    const isDanger = type === 'danger';

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
            <div className="bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl w-full max-w-md border border-slate-100 dark:border-slate-800 overflow-hidden transform transition-all scale-100 animate-scale-up">
                <div className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                        <div className={`p-3 rounded-2xl ${isDanger ? 'bg-red-50 text-red-500' : 'bg-blue-50 text-blue-500'}`}>
                            {isDanger ? <AlertTriangle className="w-8 h-8" /> : <Info className="w-8 h-8" />}
                        </div>
                        <div>
                            <h3 className="text-xl font-black text-secondary dark:text-blue-100 uppercase tracking-tight">{title}</h3>
                            <div className={`h-1 w-12 rounded-full mt-1 ${isDanger ? 'bg-red-500' : 'bg-blue-500'}`}></div>
                        </div>
                    </div>

                    <p className="text-slate-500 dark:text-slate-400 font-bold text-sm leading-relaxed mb-8">
                        {message}
                    </p>

                    <div className="flex gap-4">
                        <button
                            onClick={onCancel}
                            className="flex-1 px-6 py-4 bg-slate-50 dark:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 font-black rounded-2xl text-xs uppercase tracking-widest transition-all border border-slate-100 dark:border-slate-700"
                        >
                            {cancelLabel || 'Annuler'}
                        </button>
                        <button
                            onClick={onConfirm}
                            className={`flex-1 px-6 py-4 text-white font-black rounded-2xl text-xs uppercase tracking-widest shadow-lg transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95 ${isDanger
                                    ? 'bg-red-500 shadow-red-500/20'
                                    : 'bg-primary shadow-primary/20'
                                }`}
                        >
                            {isDanger ? <Trash2 className="w-4 h-4" /> : <Check className="w-4 h-4" />}
                            {confirmLabel || (isDanger ? 'Supprimer' : 'Confirmer')}
                        </button>
                    </div>
                </div>

                {/* Progress bar style decoration at bottom */}
                <div className={`h-1.5 w-full ${isDanger ? 'bg-red-500/10' : 'bg-primary/10'}`}>
                    <div className={`h-full animate-progress-fast ${isDanger ? 'bg-red-500' : 'bg-primary'}`} style={{ width: '100%' }}></div>
                </div>
            </div>
        </div>
    );
};

// Re-importing Trash2 because I used it in the UI
import { Trash2 } from 'lucide-react';
