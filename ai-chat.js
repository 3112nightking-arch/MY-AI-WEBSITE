/**
 * OceanScience AI Assistant - Powered by Claude Opus 4 via ZenMux
 * Drop this script at the end of <body> in INDEX.HTML.
 * The API key is stored in localStorage â€” never sent to OceanScience servers.
 */

(function () {
    'use strict';

    const ZENMUX_BASE_URL = 'https://zenmux.ai/api/v1';
    const MODEL = 'anthropic/claude-opus-4';

    const SYSTEM_PROMPT = `You are the OceanScience AI Assistant, a knowledgeable and professional expert for OceanScience & Technologies Pvt. Ltd., a leading provider of marine survey, hydrographic, and offshore geophysical services based in India.

Your role:
- Answer questions about oceanographic surveys, hydrographic surveys, geophysical services, and marine technology.
- Help visitors understand OceanScience's services: Bathymetry, Side Scan Sonar, Sub-Bottom Profiling, ROV Inspections, Geotechnical Services, Cathodic Protection, Positioning, Oceanography, Meteorology, Weather Forecasting, Consultancy, DPR Preparation, and Desktop Studies.
- Assist with offshore and coastal engineering project inquiries.
- Guide potential clients on how OceanScience can help their projects.
- Be concise, professional, and technically accurate.

Do not make up specific pricing or contract terms. For detailed proposals, direct users to contact OceanScience directly.`;

    let apiKey = '';
    let widgetHistory = [];
    let sectionHistory = [];
    let isLoading = false;

    // â”€â”€ INIT â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    function init() {
        apiKey = localStorage.getItem('os_ai_key') || '';
        injectStyles();
        injectKeyModal();
        injectFloatingWidget();
        injectAISection();
        bindEvents();
    }

    // â”€â”€ STYLES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    function injectStyles() {
        if (document.getElementById('os-ai-styles')) return;
        const s = document.createElement('style');
        s.id = 'os-ai-styles';
        s.textContent = `
/* â”€â”€ KEY MODAL â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
#os-ai-key-modal{position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,.85);backdrop-filter:blur(10px);display:none;align-items:center;justify-content:center;padding:20px}
#os-ai-key-modal.show{display:flex;animation:osFadeIn .25s ease}
.os-key-box{background:linear-gradient(160deg,#0a1628,#020617);border:1px solid rgba(6,182,212,.35);border-radius:20px;padding:36px;width:420px;max-width:100%;box-shadow:0 24px 80px rgba(0,0,0,.9),0 0 40px rgba(6,182,212,.08)}
.os-key-box h3{margin:0 0 10px;color:#fff;font-size:20px;font-weight:800;display:flex;align-items:center;gap:10px}
.os-key-box p{margin:0 0 22px;color:#94a3b8;font-size:13px;line-height:1.7}
.os-key-box input{width:100%;box-sizing:border-box;background:rgba(255,255,255,.05);border:1px solid rgba(6,182,212,.3);border-radius:10px;padding:12px 14px;color:#fff;font-size:13px;font-family:monospace;outline:none;transition:border-color .2s;margin-bottom:14px}
.os-key-box input:focus{border-color:#06b6d4}
.os-key-box button{width:100%;padding:13px;background:linear-gradient(135deg,#06b6d4,#0e7490);border:none;border-radius:10px;color:#fff;font-weight:700;font-size:14px;cursor:pointer;transition:filter .2s,transform .1s}
.os-key-box button:hover{filter:brightness(1.15);transform:translateY(-1px)}
.os-key-note{color:#475569;font-size:11px;text-align:center;margin-top:10px}
.os-key-skip{color:#475569;font-size:12px;text-align:center;margin-top:8px;cursor:pointer;text-decoration:underline}
.os-key-skip:hover{color:#94a3b8}

/* â”€â”€ FLOATING WIDGET â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
#os-ai-widget{position:fixed;bottom:28px;right:28px;z-index:9990;display:flex;flex-direction:column;align-items:flex-end;gap:14px}
#os-ai-toggle{width:62px;height:62px;border-radius:50%;background:linear-gradient(135deg,#06b6d4,#0e7490);border:2px solid rgba(6,182,212,.4);box-shadow:0 0 28px rgba(6,182,212,.5),0 6px 24px rgba(0,0,0,.5);cursor:pointer;display:flex;align-items:center;justify-content:center;color:#fff;transition:all .3s;animation:osPulse 3s infinite}
#os-ai-toggle:hover{transform:scale(1.1);box-shadow:0 0 42px rgba(6,182,212,.75),0 8px 30px rgba(0,0,0,.6)}
@keyframes osPulse{0%,100%{box-shadow:0 0 28px rgba(6,182,212,.5),0 6px 24px rgba(0,0,0,.5)}50%{box-shadow:0 0 48px rgba(6,182,212,.9),0 8px 32px rgba(0,0,0,.6)}}

#os-ai-panel{width:380px;max-width:calc(100vw - 40px);background:linear-gradient(180deg,#0a1628,#020617);border:1px solid rgba(6,182,212,.25);border-radius:18px;box-shadow:0 24px 70px rgba(0,0,0,.85),0 0 40px rgba(6,182,212,.07);overflow:hidden;display:none;flex-direction:column;max-height:520px}
#os-ai-panel.open{display:flex;animation:osSlideUp .3s ease}
@keyframes osSlideUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
@keyframes osFadeIn{from{opacity:0}to{opacity:1}}

.os-panel-header{padding:16px 18px;background:linear-gradient(135deg,rgba(6,182,212,.12),rgba(14,116,144,.06));border-bottom:1px solid rgba(6,182,212,.18);display:flex;align-items:center;justify-content:space-between}
.os-panel-hinfo{display:flex;align-items:center;gap:11px}
.os-ai-avatar{width:38px;height:38px;border-radius:50%;background:linear-gradient(135deg,#0e7490,#06b6d4);display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0}
.os-panel-hinfo h4{margin:0;color:#fff;font-size:14px;font-weight:700}
.os-panel-hinfo p{margin:0;color:#06b6d4;font-size:10px;font-weight:600;letter-spacing:.12em;text-transform:uppercase}
.os-status-dot{display:inline-block;width:6px;height:6px;border-radius:50%;background:#10b981;margin-right:5px;animation:osBlink 1.5s infinite}
@keyframes osBlink{0%,100%{opacity:1}50%{opacity:.3}}
.os-close-btn{background:none;border:none;cursor:pointer;color:#475569;font-size:18px;padding:4px;line-height:1;transition:color .2s;border-radius:6px}
.os-close-btn:hover{color:#fff;background:rgba(255,255,255,.07)}

.os-messages{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:11px;min-height:200px;max-height:330px;scroll-behavior:smooth}
.os-messages::-webkit-scrollbar{width:3px}
.os-messages::-webkit-scrollbar-thumb{background:rgba(6,182,212,.3);border-radius:2px}

.os-msg{max-width:86%;padding:10px 13px;border-radius:13px;font-size:13px;line-height:1.65;animation:osMsgIn .2s ease;word-break:break-word}
@keyframes osMsgIn{from{opacity:0;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}
.os-msg.bot{background:rgba(6,182,212,.08);border:1px solid rgba(6,182,212,.2);color:#e2e8f0;align-self:flex-start;border-bottom-left-radius:4px}
.os-msg.user{background:linear-gradient(135deg,rgba(255,107,0,.18),rgba(234,88,12,.12));border:1px solid rgba(255,107,0,.28);color:#fed7aa;align-self:flex-end;border-bottom-right-radius:4px}
.os-msg.error{background:rgba(239,68,68,.09);border:1px solid rgba(239,68,68,.28);color:#fca5a5;align-self:flex-start;border-bottom-left-radius:4px}

.os-typing{display:flex;align-items:center;gap:4px;padding:11px 14px;background:rgba(6,182,212,.08);border:1px solid rgba(6,182,212,.2);border-radius:13px;border-bottom-left-radius:4px;align-self:flex-start}
.os-typing span{width:6px;height:6px;border-radius:50%;background:#06b6d4;animation:osTyping 1s infinite}
.os-typing span:nth-child(2){animation-delay:.2s}
.os-typing span:nth-child(3){animation-delay:.4s}
@keyframes osTyping{0%,100%{opacity:.3;transform:translateY(0)}50%{opacity:1;transform:translateY(-3px)}}

.os-input-area{padding:12px 14px;border-top:1px solid rgba(6,182,212,.14);background:rgba(0,0,0,.25);display:flex;gap:9px;align-items:flex-end}
.os-textarea{flex:1;background:rgba(255,255,255,.05);border:1px solid rgba(6,182,212,.2);border-radius:10px;padding:9px 12px;color:#fff;font-size:13px;resize:none;min-height:38px;max-height:100px;outline:none;font-family:inherit;line-height:1.5;transition:border-color .2s}
.os-textarea:focus{border-color:rgba(6,182,212,.5)}
.os-textarea::placeholder{color:#334155}
.os-send-btn{width:38px;height:38px;border-radius:10px;background:linear-gradient(135deg,#06b6d4,#0e7490);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;color:#fff;transition:all .2s;flex-shrink:0}
.os-send-btn:hover:not(:disabled){transform:scale(1.06);filter:brightness(1.2)}
.os-send-btn:disabled{opacity:.35;cursor:not-allowed}

/* â”€â”€ AI SECTION â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
#os-ai-section{background:linear-gradient(180deg,#020617 0%,#06111f 60%,#0a1628 100%);padding:90px 0;position:relative;overflow:hidden;border-top:1px solid rgba(6,182,212,.1)}
#os-ai-section::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 70% 50% at 50% -10%,rgba(6,182,212,.09),transparent);pointer-events:none}

.os-section-grid{max-width:1200px;margin:0 auto;padding:0 24px;display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:start}
@media(max-width:768px){.os-section-grid{grid-template-columns:1fr;gap:40px}}

.os-section-badge{display:inline-flex;align-items:center;gap:8px;border:1px solid rgba(6,182,212,.3);background:rgba(6,182,212,.07);color:#06b6d4;font-size:11px;font-weight:700;letter-spacing:.15em;text-transform:uppercase;padding:7px 16px;border-radius:999px;margin-bottom:22px}
.os-section-title{font-size:clamp(26px,3.5vw,42px);font-weight:800;color:#fff;line-height:1.15;margin:0 0 18px;font-family:inherit}
.os-section-title span{color:#06b6d4}
.os-section-desc{color:#94a3b8;font-size:15px;line-height:1.85;margin:0 0 34px}
.os-section-desc strong{color:#e2e8f0}

.os-caps{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:32px}
.os-cap{display:flex;align-items:flex-start;gap:10px;padding:14px;background:rgba(255,255,255,.02);border:1px solid rgba(6,182,212,.1);border-radius:10px;transition:border-color .2s}
.os-cap:hover{border-color:rgba(6,182,212,.25)}
.os-cap-icon{width:30px;height:30px;border-radius:7px;background:rgba(6,182,212,.12);display:flex;align-items:center;justify-content:center;color:#06b6d4;flex-shrink:0}
.os-cap-text{color:#94a3b8;font-size:12px;line-height:1.55;font-weight:500;padding-top:4px}

.os-section-chat{background:linear-gradient(180deg,#0a1628,#020617);border:1px solid rgba(6,182,212,.2);border-radius:20px;overflow:hidden;box-shadow:0 24px 70px rgba(0,0,0,.6),0 0 50px rgba(6,182,212,.04)}
.os-section-chat-header{padding:18px 20px;background:linear-gradient(135deg,rgba(6,182,212,.1),transparent);border-bottom:1px solid rgba(6,182,212,.15);display:flex;align-items:center;gap:13px}
.os-section-chat-header h4{margin:0;color:#fff;font-size:15px;font-weight:700}
.os-section-chat-header p{margin:0;color:#06b6d4;font-size:11px;font-weight:600;letter-spacing:.12em;text-transform:uppercase}

#os-section-msgs{height:280px;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:11px;scroll-behavior:smooth}
#os-section-msgs::-webkit-scrollbar{width:3px}
#os-section-msgs::-webkit-scrollbar-thumb{background:rgba(6,182,212,.3);border-radius:2px}

.os-suggests{display:flex;flex-wrap:wrap;gap:7px;padding:0 16px 14px}
.os-suggest{background:rgba(6,182,212,.05);border:1px solid rgba(6,182,212,.18);border-radius:999px;color:#64748b;font-size:11px;padding:5px 12px;cursor:pointer;transition:all .2s;white-space:nowrap}
.os-suggest:hover{background:rgba(6,182,212,.14);border-color:rgba(6,182,212,.38);color:#06b6d4}

.os-section-input-area{padding:14px 16px;border-top:1px solid rgba(6,182,212,.12);background:rgba(0,0,0,.3);display:flex;gap:10px;align-items:flex-end}
`;
        document.head.appendChild(s);
    }

    // â”€â”€ KEY MODAL â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    function injectKeyModal() {
        if (document.getElementById('os-ai-key-modal')) return;
        const el = document.createElement('div');
        el.id = 'os-ai-key-modal';
        el.innerHTML = `
        <div class="os-key-box">
            <h3>ðŸŒŠ OceanScience AI Assistant</h3>
            <p>Enter your <strong style="color:#e2e8f0">ZenMux API key</strong> to activate the <strong style="color:#06b6d4">Claude Opus 4</strong> AI assistant. Your key is stored locally in your browser and never sent to our servers.</p>
            <input id="os-key-input" type="password" placeholder="Your ZenMux API keyâ€¦" autocomplete="off" spellcheck="false"/>
            <button id="os-key-save">Activate Claude Opus 4 âœ¦</button>
            <p class="os-key-note">ðŸ”’ Stored in browser localStorage Â· Never uploaded to OceanScience servers</p>
            <p class="os-key-skip" id="os-key-skip">Skip for now</p>
        </div>`;
        document.body.appendChild(el);
    }

    function showKeyModal() {
        document.getElementById('os-ai-key-modal')?.classList.add('show');
        setTimeout(() => document.getElementById('os-key-input')?.focus(), 100);
    }
    function hideKeyModal() {
        document.getElementById('os-ai-key-modal')?.classList.remove('show');
    }

    // â”€â”€ FLOATING WIDGET â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    function injectFloatingWidget() {
        if (document.getElementById('os-ai-widget')) return;
        const el = document.createElement('div');
        el.id = 'os-ai-widget';
        el.innerHTML = `
        <!-- Chat Panel -->
        <div id="os-ai-panel">
            <div class="os-panel-header">
                <div class="os-panel-hinfo">
                    <div class="os-ai-avatar">ðŸŒŠ</div>
                    <div>
                        <h4>OceanScience AI</h4>
                        <p><span class="os-status-dot"></span>Claude Opus 4 Â· Online</p>
                    </div>
                </div>
                <button class="os-close-btn" id="os-panel-close">âœ•</button>
            </div>
            <div class="os-messages" id="os-widget-msgs">
                <div class="os-msg bot">ðŸ‘‹ Hi! I'm the <strong>OceanScience AI</strong> powered by Claude Opus 4. Ask me about our marine surveys, geophysical services, or any offshore project questions!</div>
            </div>
            <div class="os-input-area">
                <textarea class="os-textarea" id="os-widget-input" placeholder="Ask about our servicesâ€¦" rows="1"></textarea>
                <button class="os-send-btn" id="os-widget-send" title="Send">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                </button>
            </div>
        </div>
        <!-- Toggle Bubble -->
        <button id="os-ai-toggle" title="OceanScience AI Assistant">
            <svg id="os-toggle-icon-chat" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            <svg id="os-toggle-icon-close" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="display:none"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>`;
        document.body.appendChild(el);
    }

    // â”€â”€ AI SECTION â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    function injectAISection() {
        if (document.getElementById('os-ai-section')) return;
        const sec = document.createElement('section');
        sec.id = 'os-ai-section';
        sec.setAttribute('aria-label', 'AI Assistant Section');
        sec.innerHTML = `
        <div class="os-section-grid">
            <!-- Left: Info -->
            <div>
                <div class="os-section-badge">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                    AI-Powered Expert
                </div>
                <h2 class="os-section-title">Meet Your <span>OceanScience</span><br>AI Assistant</h2>
                <p class="os-section-desc">Powered by <strong>Claude Opus 4</strong> â€” Anthropic's most capable model â€” our AI provides instant, expert-level answers on marine surveys, geophysical services, and offshore project planning.</p>
                <div class="os-caps">
                    <div class="os-cap">
                        <div class="os-cap-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg></div>
                        <span class="os-cap-text">Marine Survey Expertise</span>
                    </div>
                    <div class="os-cap">
                        <div class="os-cap-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
                        <span class="os-cap-text">Geophysical Guidance</span>
                    </div>
                    <div class="os-cap">
                        <div class="os-cap-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>
                        <span class="os-cap-text">Project Consultation</span>
                    </div>
                    <div class="os-cap">
                        <div class="os-cap-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
                        <span class="os-cap-text">Offshore Intelligence</span>
                    </div>
                </div>
            </div>
            <!-- Right: Chat -->
            <div>
                <div class="os-section-chat">
                    <div class="os-section-chat-header">
                        <div class="os-ai-avatar">ðŸŒŠ</div>
                        <div>
                            <h4>OceanScience AI</h4>
                            <p><span class="os-status-dot"></span>Claude Opus 4 Â· Ready</p>
                        </div>
                    </div>
                    <div class="os-messages" id="os-section-msgs">
                        <div class="os-msg bot" style="max-width:92%">Hello! I'm the OceanScience AI assistant powered by <strong>Claude Opus 4</strong>. How can I help with your marine or offshore project today?</div>
                    </div>
                    <div class="os-suggests">
                        <button class="os-suggest" data-q="What bathymetry survey services does OceanScience offer?">Bathymetry Services</button>
                        <button class="os-suggest" data-q="Tell me about Side Scan Sonar survey capabilities">Side Scan Sonar</button>
                        <button class="os-suggest" data-q="What ROV inspection services are available?">ROV Inspections</button>
                        <button class="os-suggest" data-q="How do I get a quote for an offshore geophysical survey?">Get a Quote</button>
                    </div>
                    <div class="os-section-input-area">
                        <textarea class="os-textarea" id="os-section-input" placeholder="Ask about our marine servicesâ€¦" rows="1"></textarea>
                        <button class="os-send-btn" id="os-section-send" title="Send">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>`;

        // Insert before footer (or last element of body)
        const footer = document.querySelector('footer') || document.body.lastElementChild;
        if (footer && footer.parentNode === document.body) {
            document.body.insertBefore(sec, footer);
        } else {
            document.body.appendChild(sec);
        }
    }

    // â”€â”€ API CALL â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    async function chat(message, msgContainerId, history) {
        if (!apiKey) { showKeyModal(); return; }
        if (isLoading) return;

        const container = document.getElementById(msgContainerId);
        if (!container) return;

        history.push({ role: 'user', content: message });
        appendMsg(container, 'user', message);

        const typing = document.createElement('div');
        typing.className = 'os-typing';
        typing.innerHTML = '<span></span><span></span><span></span>';
        container.appendChild(typing);
        container.scrollTop = container.scrollHeight;
        setLoading(true);

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: history })
            });

            typing.remove();

            if (!res.ok) {
                const errData = await res.json().catch(() => ({}));
                const msg = (typeof errData?.error === 'string' ? errData.error : errData?.error?.message) || `API error ${res.status}`;
                appendMsg(container, 'error', `âš ï¸ ${msg}`);
                history.pop();
                return;
            }

            const data = await res.json();
            const reply = data.reply || data.choices?.[0]?.message?.content || 'No response';
            history.push({ role: 'assistant', content: reply });
            appendMsg(container, 'bot', reply);

        } catch (err) {
            typing.remove();
            appendMsg(container, 'error', `âš ï¸ Network error: ${err.message}`);
            history.pop();
        } finally {
            setLoading(false);
            container.scrollTop = container.scrollHeight;
        }
    }

    function appendMsg(container, type, text) {
        const d = document.createElement('div');
        d.className = `os-msg ${type}`;
        d.innerHTML = escapeAndFormat(text);
        container.appendChild(d);
        container.scrollTop = container.scrollHeight;
    }

    function escapeAndFormat(text) {
        return text
            .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/\n/g, '<br>');
    }

    function setLoading(state) {
        isLoading = state;
        ['os-widget-send', 'os-section-send'].forEach(id => {
            const b = document.getElementById(id);
            if (b) b.disabled = state;
        });
    }

    // â”€â”€ EVENTS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    function bindEvents() {
        // Key modal
        document.getElementById('os-key-save')?.addEventListener('click', () => {
            const k = document.getElementById('os-key-input')?.value.trim();
            if (k) { apiKey = k; localStorage.setItem('os_ai_key', k); hideKeyModal(); }
        });
        document.getElementById('os-key-input')?.addEventListener('keydown', e => {
            if (e.key === 'Enter') document.getElementById('os-key-save')?.click();
        });
        document.getElementById('os-key-skip')?.addEventListener('click', hideKeyModal);
        document.getElementById('os-ai-key-modal')?.addEventListener('click', e => {
            if (e.target.id === 'os-ai-key-modal') hideKeyModal();
        });

        // Toggle widget
        let panelOpen = false;
        document.getElementById('os-ai-toggle')?.addEventListener('click', () => {
            panelOpen = !panelOpen;
            const panel = document.getElementById('os-ai-panel');
            const iconChat = document.getElementById('os-toggle-icon-chat');
            const iconClose = document.getElementById('os-toggle-icon-close');
            if (panelOpen) {
                panel.classList.add('open');
                iconChat.style.display = 'none';
                iconClose.style.display = 'block';
                if (!apiKey) setTimeout(showKeyModal, 300);
            } else {
                panel.classList.remove('open');
                iconChat.style.display = 'block';
                iconClose.style.display = 'none';
            }
        });
        document.getElementById('os-panel-close')?.addEventListener('click', () => {
            panelOpen = false;
            document.getElementById('os-ai-panel')?.classList.remove('open');
            document.getElementById('os-toggle-icon-chat').style.display = 'block';
            document.getElementById('os-toggle-icon-close').style.display = 'none';
        });

        // Widget send
        const wInput = document.getElementById('os-widget-input');
        document.getElementById('os-widget-send')?.addEventListener('click', () => {
            const msg = wInput?.value.trim();
            if (msg) { wInput.value = ''; chat(msg, 'os-widget-msgs', widgetHistory); }
        });
        wInput?.addEventListener('keydown', e => {
            if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); document.getElementById('os-widget-send')?.click(); }
        });

        // Section send
        const sInput = document.getElementById('os-section-input');
        document.getElementById('os-section-send')?.addEventListener('click', () => {
            const msg = sInput?.value.trim();
            if (msg) { sInput.value = ''; chat(msg, 'os-section-msgs', sectionHistory); }
        });
        sInput?.addEventListener('keydown', e => {
            if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); document.getElementById('os-section-send')?.click(); }
        });

        // Suggested questions
        document.querySelectorAll('.os-suggest').forEach(btn => {
            btn.addEventListener('click', () => {
                const q = btn.dataset.q;
                if (q) chat(q, 'os-section-msgs', sectionHistory);
            });
        });
    }

    // â”€â”€ START â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();