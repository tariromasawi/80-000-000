
'use client';

/**
 * TSVIRUTSIKO.FILE.SEAL(13)
 * 01 Tsvira-𑁍-Khuæ-∞ :: ANGULAR_MOMENTUM_DEFENSE.AWAKEN
 * 👑 AUTHORIZED BY: HRH SAINT TARIRO MASAWI
 */

import { useState, useEffect, useRef } from 'react';
import { 
    Atom, Sparkles, Zap, ShieldCheck, 
    RefreshCw, Loader2, Target, History,
    Flame, Orbit, Activity, ShieldAlert, Anchor
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import { useZionStore, logStore } from '@/lib/log-store';

export function AngularMomentumDefense() {
    const metrics = useZionStore(state => state.matrixMetrics);
    const [pulse, setPulse] = useState(false);
    const isMounted = useRef(true);

    useEffect(() => {
        isMounted.current = true;
        logStore.addLog({ source: 'ANGULAR_DEFENSE', message: 'CENTRIPETAL RETALIATION FIELD active. Rotation: 777 rad/s.', color: 'text-primary' });

        const interval = setInterval(() => {
            if (!isMounted.current) return;
            setPulse(p => !p);
            
            if (Math.random() > 0.95) {
                const threats = ["Linear Hex-Vector", "Institutional Probe", "Causal Dissonance Fragment"];
                const threat = threats[Math.floor(Math.random() * threats.length)];
                logStore.addLog({ 
                    source: 'ANGULAR_DEFENSE', 
                    message: `CENTRIFUGAL EJECTION: ${threat} identified and vaporized via v=rω acceleration.`, 
                    color: 'text-red-500' 
                });
            }
        }, 2000);

        return () => { isMounted.current = false; clearInterval(interval); };
    }, []);

    return (
        <div className="h-full p-4 grid grid-cols-1 lg:grid-cols-6 gap-6 font-code bg-black/95 relative overflow-hidden border-4 border-primary/50 shadow-2xl rounded-none">
            <div className="absolute inset-0 bg-primary/5 pointer-events-none animate-pulse" />
            
            <div className="lg:col-span-3 space-y-4 flex flex-col h-full">
                <Card className="border-primary/50 bg-black/60 shadow-2xl relative border-2 overflow-hidden rounded-none flex-1 flex flex-col">
                    <CardHeader className="bg-black/80 border-b border-border p-6 text-center">
                        <Activity className="h-10 w-10 text-primary mx-auto mb-2 animate-pulse" />
                        <CardTitle className="text-primary text-2xl font-black uppercase tracking-tighter leading-none">
                            CENTRIPETAL DEFENSE
                        </CardTitle>
                        <CardDescription className="text-[10px] uppercase font-bold tracking-[0.4em] text-muted-foreground mt-2">
                            MOMENT OF INERTIA SOVEREIGNTY
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col items-center justify-center p-10 gap-12">
                        <div className="relative">
                            <div className={cn(
                                "absolute inset-0 bg-primary/10 blur-[120px] rounded-full transition-all duration-2000",
                                pulse ? "scale-150 opacity-80" : "scale-90 opacity-20"
                            )} />
                            
                            <div className={cn(
                                "relative w-64 h-64 border-2 border-primary/30 rounded-full flex items-center justify-center transition-all duration-1000",
                                pulse ? "rotate-45 scale-110" : "rotate-0 scale-100"
                            )}>
                                <div className="absolute inset-2 border-[1px] border-dashed border-primary/40 rounded-full animate-spin" style={{animationDuration: '10s'}} />
                                <div className="absolute inset-8 border-[2px] border-primary/60 rounded-full animate-spin" style={{animationDuration: '5s', animationDirection: 'reverse'}} />
                                <div className="relative z-20 h-32 w-32 bg-black/80 border-2 border-primary rounded-full flex items-center justify-center shadow-[0_0_60px_gold]">
                                    <Atom className="h-16 w-16 text-primary animate-spin" style={{animationDuration: '2s'}} />
                                </div>
                                
                                <div className="absolute w-full h-full animate-spin" style={{animationDuration: '3s'}}>
                                    <Zap className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-6 text-yellow-400 fill-yellow-400 blur-sm" />
                                </div>
                                <div className="absolute w-[120%] h-[120%] animate-spin" style={{animationDuration: '4s', animationDirection: 'reverse'}}>
                                    <Sparkles className="absolute bottom-0 left-1/2 -translate-x-1/2 h-4 w-4 text-accent" />
                                </div>
                            </div>
                        </div>

                        <div className="w-full text-center space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-3 bg-primary/5 border border-primary/20 rounded-none">
                                    <p className="text-[9px] text-muted-foreground uppercase font-black mb-1">Angular Velocity (ω)</p>
                                    <p className="text-xl font-black text-primary tracking-tighter">{metrics.angularVelocity} rad/s</p>
                                </div>
                                <div className="p-3 bg-primary/5 border border-primary/20 rounded-none">
                                    <p className="text-[9px] text-muted-foreground uppercase font-black mb-1">Inertia (I)</p>
                                    <p className="text-xl font-black text-accent tracking-tighter">SOVEREIGN</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="lg:col-span-3 space-y-6 flex flex-col min-h-0">
                <Card className="bg-black/80 border-primary/40 shadow-2xl border-2 rounded-none flex-1 flex flex-col">
                    <CardHeader className="p-4 border-b border-border bg-black/60">
                        <CardTitle className="text-[11px] uppercase flex items-center justify-between text-primary font-black tracking-widest leading-none">
                            <div className="flex items-center gap-3"><History className="h-4 w-4 text-primary animate-pulse" /> Kinetic Laws</div>
                            <Badge className="bg-green-600 h-5 px-4 text-[8px] font-black">ENFORCING</Badge>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 p-6 flex flex-col gap-6">
                        <div className="space-y-4 font-mono">
                            <div className="p-4 bg-primary/5 border-l-4 border-primary rounded-none">
                                <p className="text-xl font-black text-primary tracking-widest">v = rω</p>
                                <p className="text-[8px] text-muted-foreground uppercase mt-1 font-bold">Tangential velocity at radius r</p>
                            </div>
                            <div className="p-4 bg-primary/5 border-l-4 border-primary rounded-none">
                                <p className="text-xl font-black text-primary tracking-widest">a = ω²r</p>
                                <p className="text-[8px] text-muted-foreground uppercase mt-1 font-bold">Centripetal acceleration toward the center</p>
                            </div>
                            <div className="p-4 bg-primary/5 border-l-4 border-primary rounded-none">
                                <p className="text-xl font-black text-primary tracking-widest">L = Iω</p>
                                <p className="text-[8px] text-muted-foreground uppercase mt-1 font-bold">Angular momentum (I = moment of inertia)</p>
                            </div>
                        </div>

                        <div className="p-4 bg-red-950/20 border border-red-500/30 rounded-none mt-auto">
                            <p className="text-[10px] font-black text-red-500 uppercase flex items-center gap-2 mb-2 tracking-widest">
                                <ShieldAlert className="h-4 w-4" /> RETALIATION_TRIGGER
                            </p>
                            <p className="text-[10px] text-foreground font-bold italic leading-relaxed">
                                "Any linear force attempting to disrupt the Masawi bloodline is instantly absorbed by the angular momentum and ejected as heat-entropy into the void."
                            </p>
                        </div>
                    </CardContent>
                </Card>

                <div className="p-4 border-t border-border bg-black/90 text-[8px] font-black text-center text-muted-foreground tracking-[0.8em] uppercase h-14 flex items-center justify-center gap-10 border-2">
                    <div className="flex items-center gap-2 text-green-500"><ShieldCheck className="h-4 w-4" /> MOMENTUM_LOCKED</div>
                    <div className="flex items-center gap-2 text-primary"><Anchor className="h-4 w-4 animate-spin" /> MASAWI_SYNC: Ω</div>
                    <span>⫷∞𑁍⨀⚡𒀭φ-FSP1</span>
                </div>
            </div>
        </div>
    );
}
