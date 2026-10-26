
// ---------- Language (portal SDK: hi-game-lang.js) ----------
// All in-game text lives in the I18N dictionary (same 6 languages as the
// portal). LANG is decided by the official SDK loaded in <head>; if the SDK
// is missing the game still boots in English. Lookups use ?? so an empty
// translation never falls back to showing the key name.
const I18N={
en:{
  score:'SCORE', stage:'STAGE', targetsLeft:'TARGETS LEFT', ballsLeft:'BALLS LEFT',
  menuOpen:'Open menu', menuResetBall:'Reset ball', menuRetry:'Restart stage', menuCamera:'Switch camera',
  aimLeft:'Move launch position left', aimRight:'Move launch position right',
  titleLogo:'<span class="t3">3D</span>KNOCKDOWN<br>SHOOTER',
  titleHow:'Drag down on the screen to pull back, then release to launch!<br>Knock every stack off the raft and sink them all',
  startBtn:'START GAME',
  keyhint:'◀▶ buttons / ←→ keys rotate the launch spot (around the blocks, up to ±90°) / Space = camera',
  hintDefault:'Drag <strong>down</strong> on the screen to pull back and release to launch! The ◀▶ buttons swing your launch spot around the blocks. Knock every stack off the raft and sink them all!',
  bannerSub:'"{name}" — knock down all {targets} targets with {balls} balls!',
  bombNote:' Black bomb blocks explode on impact and blast everything around them!',
  hintIntro:'Study the stack first… when the camera pulls back, drag to aim!',
  hintAim:'Stage {n} "{name}" — knock all {targets} targets off the raft and sink them with {balls} balls! Use ◀▶ to swing your launch spot around the blocks',
  hintBallSunk:'The ball splashed into the sea and sank…!',
  hintLaunched:'Ball away! Watch whether the targets topple off the raft…',
  hintNextBall:'{balls} balls left — {targets} to go. See how the stack collapsed and adjust your aim!',
  allClearSub:'You beat every stage! Final score: {score}',
  allClearTitle:'🏆 All stages clear!', allClearSubCta:'Final score: {score} — brilliant shooting!', allClearBtn:'🏆 Play again',
  hintAllClear:'All stages clear! Brilliant! 🎉',
  clearSub:'Everything down! Leftover-ball bonus +{bonus}',
  clearTitle:'🎉 Stage clear!', clearSubCta:'Leftover-ball bonus +{bonus} ・ Score: {score}', clearBtn:'Next stage →',
  hintClear:'Stage clear! Tap "Next stage" in the center of the screen',
  failSub:'{left} left standing. Try the stage again',
  failTitle:'💦 {left} left standing…', failSubCta:'Out of balls. Your score resets to the start of this stage', failBtn:'Retry stage',
  hintFail:'Out of balls… Tap "Retry stage" to try again! (score resets to the stage start)',
  stageNames:['Stacking Basics','Twin Rafts','Three Rafts','Big Twins','Stepped Fortress','Final Showdown']
},
ja:{
  score:'スコア', stage:'ステージ', targetsLeft:'残りターゲット', ballsLeft:'残りボール',
  menuOpen:'メニューを開く', menuResetBall:'ボールを戻す', menuRetry:'ステージをやり直す', menuCamera:'カメラ切替',
  aimLeft:'発射位置を左へ回す', aimRight:'発射位置を右へ回す',
  titleLogo:'<span class="t3">3D</span>ノックダウン<br>シューター',
  titleHow:'画面を下にドラッグして引っ張り、離すと発射！<br>台の上の積み上げを全部落として、水に沈めよう',
  startBtn:'ゲームスタート',
  keyhint:'◀▶ボタン・←→キーで発射位置を回転（ブロックの周り±90°・真横まで）/ スペースでカメラ',
  hintDefault:'画面を<strong>下にドラッグ</strong>して引っ張り、離すと発射！ ◀▶ボタンで発射位置がブロックの周りを回るよ。台の上の積み上げを全部落として水に沈めよう',
  bannerSub:'「{name}」 ターゲット {targets}個 ・ ボール {balls}個で全部落とそう！',
  bombNote:' 黒いボムブロックは当てると爆発して周りを吹き飛ばす！',
  hintIntro:'まずは積み上げをよーく見て… カメラが引いたらドラッグで狙おう！',
  hintAim:'ステージ{n}「{name}」— ボール{balls}個でターゲット{targets}個を全部台から落として水に沈めよう！ ◀▶ボタンで発射位置をブロックの周りに回せるよ',
  hintBallSunk:'ボールが海に落ちて沈んだ…！',
  hintLaunched:'ボールが飛んだ！ ターゲットが台から落ちるか見守ろう…',
  hintNextBall:'残りボール {balls}個 — あと {targets} 個。崩れた積み方を見て狙いを変えよう！',
  allClearSub:'全ステージ制覇！ 最終スコア {score}点',
  allClearTitle:'🏆 全ステージクリア！', allClearSubCta:'最終スコア {score}点 — お見事でした！', allClearBtn:'🏆 最初から遊ぶ',
  hintAllClear:'全ステージクリア！お見事でした🎉',
  clearSub:'全部落とした！ 残りボールボーナス +{bonus}点',
  clearTitle:'🎉 ステージクリア！', clearSubCta:'残りボールボーナス +{bonus}点 ・ 現在 {score}点', clearBtn:'次のステージへ →',
  hintClear:'ステージクリア！ 画面中央の「次のステージへ」ボタンで進もう',
  failSub:'あと {left} 個残った。ステージをやり直そう',
  failTitle:'💦 あと {left} 個残った…', failSubCta:'ボールが無くなりました。スコアはステージ開始時に戻ります', failBtn:'ステージをやり直す',
  hintFail:'ボールが無くなった…「ステージをやり直す」でもう一度挑戦！（スコアはステージ開始時に戻ります）',
  stageNames:['積み上げ入門','ツインラフト','3つの台','ビッグツイン','段差の要塞','最終決戦']
},
ko:{
  score:'점수', stage:'스테이지', targetsLeft:'남은 타겟', ballsLeft:'남은 볼',
  menuOpen:'메뉴 열기', menuResetBall:'볼 되돌리기', menuRetry:'스테이지 다시 하기', menuCamera:'카메라 전환',
  aimLeft:'발사 위치를 왼쪽으로 돌리기', aimRight:'발사 위치를 오른쪽으로 돌리기',
  titleLogo:'<span class="t3">3D</span>넉다운<br>슈터',
  titleHow:'화면을 아래로 드래그해 당겼다가 놓으면 발사!<br>뗏목 위의 쌓인 블록을 전부 떨어뜨려 물에 빠뜨리자',
  startBtn:'게임 시작',
  keyhint:'◀▶ 버튼・←→ 키로 발사 위치 회전 (블록 주변 ±90°・바로 옆까지) / 스페이스 = 카메라',
  hintDefault:'화면을 <strong>아래로 드래그</strong>해 당겼다가 놓으면 발사! ◀▶ 버튼으로 발사 위치가 블록 주위를 돌아요. 뗏목 위의 블록을 전부 떨어뜨려 물에 빠뜨리자',
  bannerSub:'"{name}" 타겟 {targets}개 · 볼 {balls}개로 전부 떨어뜨리자!',
  bombNote:' 검은 봄 블록은 맞히면 폭발해 주변을 날려버려요!',
  hintIntro:'먼저 쌓인 모양을 잘 살펴보고… 카메라가 멀어지면 드래그로 조준하자!',
  hintAim:'스테이지 {n} "{name}" — 볼 {balls}개로 타겟 {targets}개를 전부 뗏목에서 떨어뜨려 물에 빠뜨리자! ◀▶ 버튼으로 발사 위치를 블록 주위로 돌릴 수 있어요',
  hintBallSunk:'볼이 바다에 빠져 가라앉았다…!',
  hintLaunched:'볼이 날아갔다! 타겟이 뗏목에서 떨어지는지 지켜보자…',
  hintNextBall:'남은 볼 {balls}개 — 앞으로 {targets}개. 무너진 모양을 보고 조준을 바꿔보자!',
  allClearSub:'전 스테이지 클리어! 최종 점수 {score}점',
  allClearTitle:'🏆 전 스테이지 클리어!', allClearSubCta:'최종 점수 {score}점 — 대단해요!', allClearBtn:'🏆 처음부터 플레이',
  hintAllClear:'전 스테이지 클리어! 대단해요🎉',
  clearSub:'전부 떨어뜨렸다! 남은 볼 보너스 +{bonus}점',
  clearTitle:'🎉 스테이지 클리어!', clearSubCta:'남은 볼 보너스 +{bonus}점 ・ 현재 {score}점', clearBtn:'다음 스테이지로 →',
  hintClear:'스테이지 클리어! 화면 중앙의 "다음 스테이지로" 버튼으로 진행하자',
  failSub:'아직 {left}개 남았다. 스테이지를 다시 해보자',
  failTitle:'💦 아직 {left}개 남았다…', failSubCta:'볼이 다 떨어졌습니다. 점수는 스테이지 시작 시점으로 돌아갑니다', failBtn:'스테이지 다시 하기',
  hintFail:'볼이 다 떨어졌다… "스테이지 다시 하기"로 다시 도전! (점수는 스테이지 시작 시점으로 돌아갑니다)',
  stageNames:['쌓기 입문','트윈 래프트','뗏목 3개','빅 트윈','단차 요새','최종 결전']
},
es:{
  score:'PUNTOS', stage:'NIVEL', targetsLeft:'OBJETIVOS', ballsLeft:'BOLAS',
  menuOpen:'Abrir menú', menuResetBall:'Reiniciar bola', menuRetry:'Reiniciar nivel', menuCamera:'Cambiar cámara',
  aimLeft:'Girar la posición de tiro a la izquierda', aimRight:'Girar la posición de tiro a la derecha',
  titleLogo:'<span class="t3">3D</span>KNOCKDOWN<br>SHOOTER',
  titleHow:'Arrastra hacia abajo para tensar y suelta para lanzar.<br>Derriba todo lo apilado en la balsa y húndelo en el agua',
  startBtn:'JUGAR',
  keyhint:'Botones ◀▶ / teclas ←→ giran la posición de tiro (alrededor de los bloques, hasta ±90°) / Espacio = cámara',
  hintDefault:'Arrastra <strong>hacia abajo</strong> para tensar y suelta para lanzar. Los botones ◀▶ mueven tu posición de tiro alrededor de los bloques. ¡Derriba todo lo de la balsa y húndelo!',
  bannerSub:'«{name}»: ¡derriba los {targets} objetivos con {balls} bolas!',
  bombNote:' ¡Los bloques bomba negros explotan al impactar y vuelan todo a su alrededor!',
  hintIntro:'Observa bien la pila… cuando la cámara se aleje, arrastra para apuntar.',
  hintAim:'Nivel {n} «{name}»: derriba los {targets} objetivos de la balsa con {balls} bolas y húndelos. Con ◀▶ giras tu posición de tiro alrededor de los bloques',
  hintBallSunk:'¡La bola cayó al mar y se hundió…!',
  hintLaunched:'¡La bola salió disparada! A ver si los objetivos caen de la balsa…',
  hintNextBall:'Quedan {balls} bolas y {targets} objetivos. Mira cómo quedó la pila y ajusta el tiro.',
  allClearSub:'¡Todos los niveles superados! Puntuación final: {score}',
  allClearTitle:'🏆 ¡Juego completado!', allClearSubCta:'Puntuación final: {score} — ¡enhorabuena!', allClearBtn:'🏆 Jugar de nuevo',
  hintAllClear:'¡Todos los niveles superados! ¡Enhorabuena! 🎉',
  clearSub:'¡Todo derribado! Bonus por bolas restantes: +{bonus}',
  clearTitle:'🎉 ¡Nivel superado!', clearSubCta:'Bonus por bolas restantes: +{bonus} ・ Puntuación: {score}', clearBtn:'Siguiente nivel →',
  hintClear:'¡Nivel superado! Pulsa «Siguiente nivel» en el centro de la pantalla',
  failSub:'Quedaron {left} en pie. Intenta el nivel de nuevo',
  failTitle:'💦 Quedaron {left} en pie…', failSubCta:'Te quedaste sin bolas. La puntuación vuelve al inicio del nivel', failBtn:'Reintentar nivel',
  hintFail:'Sin bolas… Pulsa «Reintentar nivel» para intentarlo otra vez (la puntuación vuelve al inicio del nivel)',
  stageNames:['Primeras pilas','Balsas gemelas','Tres balsas','Gemelas gigantes','Fortaleza escalonada','Batalla final']
},
pt:{
  score:'PONTOS', stage:'FASE', targetsLeft:'ALVOS RESTANTES', ballsLeft:'BOLAS RESTANTES',
  menuOpen:'Abrir menu', menuResetBall:'Recolocar a bola', menuRetry:'Reiniciar fase', menuCamera:'Trocar câmera',
  aimLeft:'Girar a posição de tiro para a esquerda', aimRight:'Girar a posição de tiro para a direita',
  titleLogo:'<span class="t3">3D</span>KNOCKDOWN<br>SHOOTER',
  titleHow:'Arraste para baixo para puxar e solte para lançar!<br>Derrube tudo o que está empilhado na jangada e afunde no mar',
  startBtn:'JOGAR',
  keyhint:'Botões ◀▶ / setas ←→ giram a posição de tiro (ao redor dos blocos, até ±90°) / Espaço = câmera',
  hintDefault:'Arraste <strong>para baixo</strong> para puxar e solte para lançar! Os botões ◀▶ giram sua posição de tiro ao redor dos blocos. Derrube tudo da jangada e afunde!',
  bannerSub:'"{name}" — derrube os {targets} alvos com {balls} bolas!',
  bombNote:' Os blocos-bomba pretos explodem ao serem atingidos e lançam tudo ao redor!',
  hintIntro:'Observe bem a pilha… quando a câmera recuar, arraste para mirar!',
  hintAim:'Fase {n} "{name}" — derrube os {targets} alvos da jangada com {balls} bolas e afunde tudo! Com ◀▶ você gira a posição de tiro ao redor dos blocos',
  hintBallSunk:'A bola caiu no mar e afundou…!',
  hintLaunched:'A bola voou! Vamos ver se os alvos caem da jangada…',
  hintNextBall:'Restam {balls} bolas — faltam {targets} alvos. Veja como a pilha desabou e ajuste a mira!',
  allClearSub:'Todas as fases vencidas! Pontuação final: {score}',
  allClearTitle:'🏆 Você zerou o jogo!', allClearSubCta:'Pontuação final: {score} — parabéns!', allClearBtn:'🏆 Jogar de novo',
  hintAllClear:'Todas as fases vencidas! Parabéns! 🎉',
  clearSub:'Derrubou tudo! Bônus de bolas restantes: +{bonus}',
  clearTitle:'🎉 Fase concluída!', clearSubCta:'Bônus de bolas restantes: +{bonus} ・ Pontuação atual: {score}', clearBtn:'Próxima fase →',
  hintClear:'Fase concluída! Toque em "Próxima fase" no centro da tela',
  failSub:'Faltaram {left}. Tente a fase de novo',
  failTitle:'💦 Faltaram {left}…', failSubCta:'As bolas acabaram. A pontuação volta ao início da fase', failBtn:'Tentar de novo',
  hintFail:'As bolas acabaram… Toque em "Tentar de novo" para mais uma chance! (a pontuação volta ao início da fase)',
  stageNames:['Empilhando: o básico','Jangadas gêmeas','Três jangadas','Gêmeas gigantes','Fortaleza em degraus','Batalha final']
},
zh:{
  score:'分数', stage:'关卡', targetsLeft:'剩余目标', ballsLeft:'剩余球',
  menuOpen:'打开菜单', menuResetBall:'重置球', menuRetry:'重新开始关卡', menuCamera:'切换镜头',
  aimLeft:'向左旋转发射位置', aimRight:'向右旋转发射位置',
  titleLogo:'<span class="t3">3D</span>击倒<br>射手',
  titleHow:'向下拖动屏幕拉满，松手发射！<br>把木筏上堆积的东西全部打落，沉入水中',
  startBtn:'开始游戏',
  keyhint:'◀▶按钮・←→方向键旋转发射位置（绕方块一周，最大±90°）/ 空格键切换镜头',
  hintDefault:'向<strong>下拖动</strong>屏幕拉满后松手发射！◀▶按钮让发射位置绕着方块转。把木筏上堆的东西全部打落沉入水中吧',
  bannerSub:'「{name}」用 {balls} 个球打落全部 {targets} 个目标！',
  bombNote:' 黑色炸弹方块被击中会爆炸，把周围都炸飞！',
  hintIntro:'先仔细看看堆积的样子…镜头拉远后拖动瞄准吧！',
  hintAim:'第{n}关「{name}」— 用{balls}个球把{targets}个目标全部打下木筏沉入水中！用◀▶按钮可以绕方块旋转发射位置',
  hintBallSunk:'球掉进海里沉下去了…！',
  hintLaunched:'球飞出去了！看看目标会不会从木筏上掉下来…',
  hintNextBall:'还剩{balls}个球 — 还差{targets}个。看看倒塌后的样子，调整瞄准吧！',
  allClearSub:'全部关卡通关！最终分数 {score} 分',
  allClearTitle:'🏆 全部通关！', allClearSubCta:'最终分数 {score} 分 — 太厉害了！', allClearBtn:'🏆 从头再玩',
  hintAllClear:'全部通关！太厉害了🎉',
  clearSub:'全部打落！剩余球奖励 +{bonus} 分',
  clearTitle:'🎉 过关啦！', clearSubCta:'剩余球奖励 +{bonus} 分 ・ 当前 {score} 分', clearBtn:'下一关 →',
  hintClear:'过关啦！点屏幕中央的「下一关」按钮继续',
  failSub:'还剩 {left} 个没打落。重新挑战这一关吧',
  failTitle:'💦 还剩 {left} 个…', failSubCta:'球用完了。分数将恢复到本关开始时', failBtn:'重新开始关卡',
  hintFail:'球用完了…点「重新开始关卡」再挑战一次！（分数恢复到本关开始时）',
  stageNames:['堆积入门','双子木筏','三座平台','巨型双塔','阶梯要塞','最终决战']
}
};
var LANG = (window.HiLang && HiLang.init({
  id: 'knockdown-shooter',
  langs: ['en', 'ja', 'ko', 'es', 'pt', 'zh'],
  live: true,
  onChange: function (code) { applyLang(code); },
})) || 'en';
function t(key, params){
  const dict = I18N[LANG] ?? I18N.en;
  let s = dict[key] ?? I18N.en[key] ?? key;
  if(params){ Object.keys(params).forEach(function(k){ s = String(s).split('{'+k+'}').join(params[k]); }); }
  return s;
}
function stageName(i){ const names = (I18N[LANG] ?? I18N.en).stageNames ?? I18N.en.stageNames; return names[i] ?? I18N.en.stageNames[i] ?? ''; }
// Language-independent context for the banner and the center CTA panel.
// showBanner/showCta store the *meaning* (kind/mode + numbers) here instead
// of baked translated strings, so applyLang can re-render both texts from
// the dictionary in whatever language is current — even while the banner /
// panel are hidden. Defaults describe the boot state: stage 1's banner and
// the (hidden) stage-clear panel.
var bannerCtx={kind:'stage',stageIndex:0,targets:15,balls:4};
var ctaCtx={mode:'next',bonus:0,score:0,left:0};
// Re-render every visible static text + the HUD in the new language. Called
// by the SDK (live) whenever the portal language changes mid-game — no reload.
function applyLang(code){
  LANG = I18N[code] ? code : 'en';
  const set=function(id,txt,html){ const n=document.getElementById(id); if(n){ if(html) n.innerHTML=txt; else n.textContent=txt; } };
  set('lblScore', t('score')); set('lblStage', t('stage')); set('lblTargets', t('targetsLeft')); set('lblBalls', t('ballsLeft'));
  set('resetBallBtn', t('menuResetBall')); set('retryBtn', t('menuRetry')); set('cameraBtn', t('menuCamera'));
  set('titleLogo', t('titleLogo'), true); set('titleHow', t('titleHow'), true); set('startBtn', t('startBtn'));
  set('keyhint', t('keyhint'));
  const mb=document.getElementById('menuBtn'); if(mb) mb.setAttribute('aria-label', t('menuOpen'));
  const al=document.getElementById('angleLeft'), ar=document.getElementById('angleRight');
  if(al){ al.setAttribute('aria-label', t('aimLeft')); al.setAttribute('title', t('aimLeft')); }
  if(ar){ ar.setAttribute('aria-label', t('aimRight')); ar.setAttribute('title', t('aimRight')); }
  if(typeof state!=='undefined' && state==='title') set('hintText', t('hintDefault'), true);
  // Banner subtitle and the center CTA panel (title / sub / button) also
  // follow the language, even while hidden: re-render them from the
  // dictionary via their stored context (renderBanner/renderCta are defined
  // with the game UI below; guarded in case this runs before they exist).
  try{ if(typeof renderBanner==='function') renderBanner(); }catch(e){}
  try{ if(typeof renderCta==='function') renderCta(); }catch(e){}
  if(typeof updateHUD==='function') updateHUD();
}

// ---------- Audio (tiny synth) ----------
let audioCtx=null;
function beep(freq,dur,type,vol){ try{ if(!audioCtx) audioCtx=new (window.AudioContext||window.webkitAudioContext)(); if(audioCtx.state==='suspended') audioCtx.resume(); const o=audioCtx.createOscillator(),g=audioCtx.createGain(); o.type=type||'sine'; o.frequency.value=freq; g.gain.setValueAtTime(vol||0.12,audioCtx.currentTime); g.gain.exponentialRampToValueAtTime(0.001,audioCtx.currentTime+dur); o.connect(g); g.connect(audioCtx.destination); o.start(); o.stop(audioCtx.currentTime+dur);}catch(e){} }
function soundHit(v){ beep(110+Math.random()*70,0.1,'triangle',Math.min(0.18,0.04+v*0.02)); }
function soundLaunch(){ beep(520,0.15,'sawtooth',0.08); setTimeout(()=>beep(760,0.12,'sine',0.08),60); }
function soundPop(){ beep(880+Math.random()*220,0.14,'square',0.07); setTimeout(()=>beep(1320,0.1,'sine',0.06),40); }
function soundClear(){ [523,659,784,1046,1318].forEach((f,i)=>setTimeout(()=>beep(f,0.24,'triangle',0.14),i*95)); }
function soundFail(){ [392,330,262].forEach((f,i)=>setTimeout(()=>beep(f,0.25,'triangle',0.12),i*130)); }
function soundSplash(strength){ try{ if(!audioCtx) audioCtx=new (window.AudioContext||window.webkitAudioContext)(); if(audioCtx.state==='suspended') audioCtx.resume(); const dur=0.38; const len=Math.floor(audioCtx.sampleRate*dur); const buffer=audioCtx.createBuffer(1,len,audioCtx.sampleRate); const d=buffer.getChannelData(0); for(let i=0;i<len;i++){ d[i]=(Math.random()*2-1)*Math.pow(1-i/len,1.4); } const src=audioCtx.createBufferSource(); src.buffer=buffer; const f=audioCtx.createBiquadFilter(); f.type='lowpass'; f.frequency.value=750+450*(strength||1); const g=audioCtx.createGain(); g.gain.setValueAtTime(Math.min(0.3,0.13*(strength||1)+0.05),audioCtx.currentTime); g.gain.exponentialRampToValueAtTime(0.001,audioCtx.currentTime+dur); src.connect(f); f.connect(g); g.connect(audioCtx.destination); src.start(); beep(150,0.18,'sine',0.07); }catch(e){} }

// ---------- Three setup ----------
const app=document.getElementById('app');
const scene=new THREE.Scene();
(function(){ const c=document.createElement('canvas'); c.width=16; c.height=512; const x=c.getContext('2d'); const g=x.createLinearGradient(0,0,0,512); g.addColorStop(0,'#2f7fd0'); g.addColorStop(0.45,'#6db3ec'); g.addColorStop(0.75,'#a8d8f8'); g.addColorStop(1,'#dff4ff'); x.fillStyle=g; x.fillRect(0,0,16,512); scene.background=new THREE.CanvasTexture(c); })();
scene.fog=new THREE.Fog(0xcfeafb, 34, 95);
const camera=new THREE.PerspectiveCamera(58, innerWidth/innerHeight, 0.1, 120);
let camMode=0;
const chaseDir=new THREE.Vector3(0,0,-1); // horizontal flight direction of the current shot, for the chase camera
// ---------- Orbiting launcher ----------
// The launcher (ball + slingshot stand) travels on a circle around the
// target platforms' center; shots always head toward that center, and the
// play camera rides behind the launcher.
const stageCenter=new THREE.Vector3(0,0,-5.8);
let ORBIT_R=12.8;
let angleOffset=0; // orbit angle of the launcher around stageCenter, ±90°
function launcherPos(){ return new THREE.Vector3(stageCenter.x+ORBIT_R*Math.sin(angleOffset), 0.42, stageCenter.z+ORBIT_R*Math.cos(angleOffset)); }
function outwardDir(){ return new THREE.Vector3(Math.sin(angleOffset),0,Math.cos(angleOffset)); }
function perpDir(){ return new THREE.Vector3(Math.cos(angleOffset),0,-Math.sin(angleOffset)); }
function lookTarget(){ return new THREE.Vector3(stageCenter.x,1.6,stageCenter.z+0.2); }
function setCamBase(){ camera.position.copy(camBasePos()); camera.lookAt(lookTarget()); }
setCamBase();
const renderer=new THREE.WebGLRenderer({antialias:true});
renderer.setSize(innerWidth,innerHeight); renderer.setPixelRatio(Math.min(devicePixelRatio,2));
renderer.shadowMap.enabled=true; renderer.shadowMap.type=THREE.PCFSoftShadowMap;
app.appendChild(renderer.domElement);

scene.add(new THREE.HemisphereLight(0xeaf6ff,0x3d6a8a,1.15));
scene.add(new THREE.AmbientLight(0xffffff,0.25));
const dir=new THREE.DirectionalLight(0xfff6e0,1.35); dir.position.set(6,13,6); dir.castShadow=true; dir.shadow.mapSize.set(2048,2048); dir.shadow.camera.left=-13; dir.shadow.camera.right=13; dir.shadow.camera.top=18; dir.shadow.camera.bottom=-18; scene.add(dir);
const p1=new THREE.PointLight(0xffe9b0,0.5,22); p1.position.set(-4,5,-8); scene.add(p1);
const p2=new THREE.PointLight(0xbfe6ff,0.5,22); p2.position.set(4,4,-11); scene.add(p2);
// sun + drifting clouds in the big sky
(function(){ const sun=new THREE.Mesh(new THREE.SphereGeometry(1.5,20,20), new THREE.MeshBasicMaterial({color:0xfff3b0,fog:false})); sun.position.set(16,15,-42); scene.add(sun); const glow=new THREE.Mesh(new THREE.SphereGeometry(2.6,20,20), new THREE.MeshBasicMaterial({color:0xfff9d6,transparent:true,opacity:0.35,fog:false})); glow.position.copy(sun.position); scene.add(glow); })();
const clouds=[];
function addCloud(x,y,z,s){ const g=new THREE.Group(); const m=new THREE.MeshBasicMaterial({color:0xffffff,transparent:true,opacity:0.92,fog:false}); [[0,0,0,1.5],[1.3,0.15,0.2,1.05],[-1.25,0.1,-0.1,1.0],[0.5,0.45,-0.2,0.85],[-0.55,0.4,0.15,0.8]].forEach(function(p){ const b=new THREE.Mesh(new THREE.SphereGeometry(p[3],14,12), m); b.position.set(p[0],p[1],p[2]); b.scale.y=0.55; g.add(b); }); g.position.set(x,y,z); g.scale.setScalar(s); scene.add(g); clouds.push(g); }
addCloud(-11,8.5,-26,1.5); addCloud(7,10,-32,2.0); addCloud(15,7.5,-18,1.1); addCloud(-16,11,-14,1.2); addCloud(2,9.5,-40,2.4); addCloud(-6,7,-20,0.9);
// real sky dome (geometry): the water's reflection pass renders the scene from
// a mirrored camera, and a screen-space background texture would be sampled
// there at the wrong place — the left/right water ended up mirroring the dark
// top strip of the gradient as a flat blue slab. A dome gives the reflection
// the same sky the eye sees, in the correct direction.
(function(){
  const mat=new THREE.ShaderMaterial({
    side:THREE.BackSide, depthWrite:false,
    vertexShader:'varying vec3 vDir; void main(){ vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 ); }',
    fragmentShader:[
      'varying vec3 vDir;',
      'void main(){',
      '  float h = clamp( normalize( vDir ).y, 0.0, 1.0 );',
      '  vec3 col = mix( vec3( 0.875, 0.957, 1.000 ), vec3( 0.659, 0.847, 0.973 ), smoothstep( 0.0, 0.16, h ) );',
      '  col = mix( col, vec3( 0.427, 0.702, 0.925 ), smoothstep( 0.13, 0.42, h ) );',
      '  col = mix( col, vec3( 0.184, 0.498, 0.816 ), smoothstep( 0.40, 0.85, h ) );',
      '  gl_FragColor = vec4( col, 1.0 );',
      '  #include <tonemapping_fragment>',
      '  #include <colorspace_fragment>',
      '}'
    ].join('\n')
  });
  const dome=new THREE.Mesh(new THREE.SphereGeometry(88,24,16), mat);
  dome.renderOrder=-10;
  scene.add(dome);
})();

// ---------- Physics ----------
const world=new CANNON.World(); world.gravity.set(0,-9.82,0); world.broadphase=new CANNON.NaiveBroadphase(); world.allowSleep=true;
// NOTE: Naive (not SAP) broadphase on purpose — SAP loses track of the static
// raft bodies added at each stage start after stepping has begun, and stacks
// would fall through their decks. Body count stays small (~90), so naive is fine.
const matGround=new CANNON.Material('ground'); const matBall=new CANNON.Material('ball'); const matTarget=new CANNON.Material('target');
world.addContactMaterial(new CANNON.ContactMaterial(matGround,matBall,{friction:0.4,restitution:0.3}));
world.addContactMaterial(new CANNON.ContactMaterial(matGround,matTarget,{friction:0.55,restitution:0.15}));
world.addContactMaterial(new CANNON.ContactMaterial(matBall,matTarget,{friction:0.1,restitution:0.3}));
world.addContactMaterial(new CANNON.ContactMaterial(matTarget,matTarget,{friction:0.45,restitution:0.15}));

// ---------- Static scenery ----------
function addStaticBox(w,h,d,x,y,z,color,opts){ opts=opts||{}; const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d), new THREE.MeshStandardMaterial({color:color,roughness:opts.rough||0.85,map:opts.map||null})); m.position.set(x,y,z); m.receiveShadow=true; m.castShadow=!!opts.cast; scene.add(m); const b=new CANNON.Body({mass:0,material:matGround,shape:new CANNON.Box(new CANNON.Vec3(w/2,h/2,d/2))}); b.position.set(x,y,z); world.addBody(b); return {mesh:m,body:b}; }

// sea surface (targets that fall in vanish with a splash of points)
let waterTex=null, waterUniforms=null;
(function(){ const c=document.createElement('canvas'); c.width=256; c.height=256; const x=c.getContext('2d'); const g=x.createLinearGradient(0,0,256,256); g.addColorStop(0,'#1b7fc4'); g.addColorStop(1,'#2f9bd8'); x.fillStyle=g; x.fillRect(0,0,256,256); for(let i=0;i<46;i++){ x.strokeStyle='rgba(255,255,255,'+(0.10+Math.random()*0.16)+')'; x.lineWidth=1.5+Math.random()*1.5; x.beginPath(); const wy=Math.random()*256, wx=Math.random()*256, len=14+Math.random()*30; x.moveTo(wx,wy); x.quadraticCurveTo(wx+len/2, wy+3+Math.random()*3, wx+len, wy); x.stroke(); } for(let i=0;i<260;i++){ x.fillStyle='rgba(190,235,255,'+(0.05+Math.random()*0.13)+')'; x.fillRect(Math.random()*256,Math.random()*256,2.5,2.5);} waterTex=new THREE.CanvasTexture(c); waterTex.wrapS=waterTex.wrapT=THREE.RepeatWrapping; waterTex.repeat.set(12,12);
  const seaBase=new THREE.Mesh(new THREE.BoxGeometry(170,0.2,170), new THREE.MeshPhongMaterial({map:waterTex,color:0xa8d2f0,shininess:80,specular:0x9fd4ff}));
  seaBase.position.set(0,-0.14,-2); seaBase.receiveShadow=true; scene.add(seaBase);
  // --- mirror reflection on the water surface ---
  // The scene is rendered once per frame from a camera mirrored across the
  // water plane (y=0) into a render target; that image is projected back onto
  // the sea plane with animated ripple distortion and a fresnel blend, so the
  // sky, raft, targets and ball reflect in the water (Reflector-style).
  // mipmaps on the reflection target: without them the projective sample is
  // minified without filtering at grazing angles and the reflected image
  // breaks into smeared streaks whenever the camera gets close to the blocks
  const reflectRT=new THREE.WebGLRenderTarget(1024,1024,{generateMipmaps:true,minFilter:THREE.LinearMipmapLinearFilter});
  reflectRT.samples=4;
  waterUniforms={
    color:{value:new THREE.Color(0x2a74b8)},
    tDiffuse:{value:reflectRT.texture},
    tRipple:{value:waterTex},
    textureMatrix:{value:new THREE.Matrix4()},
    time:{value:0},
    fogColor:{value:new THREE.Color(0xcfeafb)},
    fogNear:{value:34},
    fogFar:{value:95}
  };
  const waterMat=new THREE.ShaderMaterial({
    uniforms:waterUniforms,
    vertexShader:[
      'uniform mat4 textureMatrix;',
      'varying vec4 vUvP;',
      'varying vec3 vWorldPos;',
      'void main(){',
      '  vec4 wp = modelMatrix * vec4( position, 1.0 );',
      '  vWorldPos = wp.xyz;',
      '  vUvP = textureMatrix * vec4( position, 1.0 );',
      '  gl_Position = projectionMatrix * viewMatrix * wp;',
      '}'
    ].join('\n'),
    // the reflection is sampled projectively; samples that fall outside the
    // mirrored frustum, or behind it, used to fall back to the saturated deep
    // water colour, which painted the left/right edges of the sea as flat
    // blue slabs. Those out-of-range areas now fade over a wide band into a
    // pale sky haze (what distant water reflecting a bright sky looks like),
    // and the ripple distortion is damped near the borders so clamped edge
    // texels are never smeared across the sea as streaks
    fragmentShader:[
      'uniform vec3 color;',
      'uniform sampler2D tDiffuse;',
      'uniform sampler2D tRipple;',
      'uniform float time;',
      'uniform vec3 fogColor;',
      'uniform float fogNear;',
      'uniform float fogFar;',
      'varying vec4 vUvP;',
      'varying vec3 vWorldPos;',
      'void main(){',
      '  vec3 ripple = texture2D( tRipple, vWorldPos.xz * 0.045 + vec2( time * 0.010, time * 0.016 ) ).rgb;',
      '  vec3 ripple2 = texture2D( tRipple, vWorldPos.xz * 0.115 - vec2( time * 0.013, time * 0.006 ) ).rgb;',
      '  float pw0 = vUvP.w;',
      '  vec2 puv0 = vUvP.xy / max( pw0, 1e-5 );',
      '  vec2 edge0 = smoothstep( -0.12, 0.12, puv0 ) * ( 1.0 - smoothstep( 0.88, 1.12, puv0 ) );',
      '  float inRange = edge0.x * edge0.y * step( 0.0, pw0 );',
      '  vec2 distortion = ( ripple.rg - ripple2.rg ) * 0.07 * ( 0.15 + 0.85 * inRange );',
      '  vec4 uvp = vUvP;',
      '  uvp.xy += distortion * uvp.w;',
      '  float pw = uvp.w;',
      '  vec2 puv = uvp.xy / max( pw, 1e-5 );',
      '  vec2 edgeIn = smoothstep( -0.12, 0.12, puv ) * ( 1.0 - smoothstep( 0.88, 1.12, puv ) );',
      '  float texIn = edgeIn.x * edgeIn.y * step( 0.0, pw );',
      '  vec3 refl = texture2D( tDiffuse, clamp( puv, vec2( 0.002 ), vec2( 0.998 ) ) ).rgb;',
      '  vec3 viewDir = normalize( cameraPosition - vWorldPos );',
      '  float fresnel = 0.30 + 0.64 * pow( 1.0 - max( viewDir.y, 0.0 ), 2.2 );',
      '  vec3 deep = color * ( 0.85 + ripple.b * 0.3 );',
      '  vec3 colr = mix( deep, refl, clamp( fresnel, 0.0, 0.92 ) * texIn );',
      '  vec3 haze = mix( fogColor, vec3( 0.52, 0.71, 0.90 ), 0.55 ) * ( 0.92 + ripple.b * 0.14 );',
      '  colr = mix( haze, colr, texIn );',
      '  colr += vec3( 1.0, 0.98, 0.9 ) * smoothstep( 0.86, 1.0, ( ripple.r + ripple.g ) * 0.5 ) * 0.07;',
      '  float fogF = smoothstep( fogNear, fogFar, distance( cameraPosition, vWorldPos ) );',
      '  colr = mix( colr, fogColor, fogF );',
      '  gl_FragColor = vec4( colr, 1.0 );',
      '  #include <tonemapping_fragment>',
      '  #include <colorspace_fragment>',
      '}'
    ].join('\n')
  });
  const sea=new THREE.Mesh(new THREE.PlaneGeometry(260,260), waterMat);
  sea.rotation.x=-Math.PI/2; sea.position.set(0,0,-2); scene.add(sea);
  // mirrored-camera reflection pass (runs inside the main render)
  const reflectPlane=new THREE.Plane();
  const reflectNormal=new THREE.Vector3();
  const reflectCamPos=new THREE.Vector3();
  const reflectWorldPos=new THREE.Vector3();
  const reflectRotMat=new THREE.Matrix4();
  const reflectLookAt=new THREE.Vector3();
  const reflectView=new THREE.Vector3();
  const reflectTarget=new THREE.Vector3();
  const reflectClip=new THREE.Vector4();
  const reflectQ=new THREE.Vector4();
  const virtualCamera=new THREE.PerspectiveCamera();
  sea.onBeforeRender=function(renderer, sceneArg, camera){
    reflectWorldPos.setFromMatrixPosition(sea.matrixWorld);
    reflectCamPos.setFromMatrixPosition(camera.matrixWorld);
    reflectRotMat.extractRotation(sea.matrixWorld);
    reflectNormal.set(0,0,1).applyMatrix4(reflectRotMat);
    reflectView.subVectors(reflectWorldPos, reflectCamPos);
    if(reflectView.dot(reflectNormal)>0) return;
    reflectView.reflect(reflectNormal).negate();
    reflectView.add(reflectWorldPos);
    reflectRotMat.extractRotation(camera.matrixWorld);
    reflectLookAt.set(0,0,-1).applyMatrix4(reflectRotMat).add(reflectCamPos);
    reflectTarget.subVectors(reflectLookAt, reflectWorldPos);
    reflectTarget.reflect(reflectNormal).negate();
    reflectTarget.add(reflectWorldPos);
    virtualCamera.position.copy(reflectView);
    virtualCamera.up.set(0,1,0).applyMatrix4(reflectRotMat).reflect(reflectNormal);
    virtualCamera.lookAt(reflectTarget);
    virtualCamera.far=camera.far;
    virtualCamera.updateMatrixWorld();
    virtualCamera.projectionMatrix.copy(camera.projectionMatrix);
    // texture matrix: bias * projection * view-inverse * model
    waterUniforms.textureMatrix.value.set(
      0.5,0.0,0.0,0.5,
      0.0,0.5,0.0,0.5,
      0.0,0.0,0.5,0.5,
      0.0,0.0,0.0,1.0
    );
    waterUniforms.textureMatrix.value.multiply(virtualCamera.projectionMatrix);
    waterUniforms.textureMatrix.value.multiply(virtualCamera.matrixWorldInverse);
    waterUniforms.textureMatrix.value.multiply(sea.matrixWorld);
    // oblique near-plane clipping so nothing below the water leaks into the reflection
    reflectPlane.setFromNormalAndCoplanarPoint(reflectNormal, reflectWorldPos);
    reflectPlane.applyMatrix4(virtualCamera.matrixWorldInverse);
    reflectClip.set(reflectPlane.normal.x, reflectPlane.normal.y, reflectPlane.normal.z, reflectPlane.constant);
    const pm=virtualCamera.projectionMatrix;
    reflectQ.x=(Math.sign(reflectClip.x)+pm.elements[8])/pm.elements[0];
    reflectQ.y=(Math.sign(reflectClip.y)+pm.elements[9])/pm.elements[5];
    reflectQ.z=-1.0;
    reflectQ.w=(1.0+pm.elements[10])/pm.elements[14];
    reflectClip.multiplyScalar(2.0/reflectClip.dot(reflectQ));
    pm.elements[2]=reflectClip.x;
    pm.elements[6]=reflectClip.y;
    pm.elements[10]=reflectClip.z+1.0-0.003;
    pm.elements[14]=reflectClip.w;
    sea.visible=false;
    const currentRT=renderer.getRenderTarget();
    renderer.setRenderTarget(reflectRT);
    renderer.state.buffers.depth.setMask(true);
    if(renderer.autoClear===false) renderer.clear();
    renderer.render(sceneArg, virtualCamera);
    renderer.setRenderTarget(currentRT);
    sea.visible=true;
  };
  const b=new CANNON.Body({mass:0,material:matGround,shape:new CANNON.Box(new CANNON.Vec3(45,0.1,45))}); b.position.set(0,-0.1,-2); world.addBody(b);
})();

// ---------- Platforms (floating rafts the targets stand on) ----------
// Each stage builds 1–3 rafts of different width / depth / deck height.
const woodTex=(function(){ const c=document.createElement('canvas'); c.width=512; c.height=256; const x=c.getContext('2d'); x.fillStyle='#c99a5e'; x.fillRect(0,0,512,256); for(let i=0;i<8;i++){ x.fillStyle=i%2?'#bb8c50':'#d4a668'; x.fillRect(0,i*32,512,32); x.strokeStyle='rgba(90,50,10,.3)'; x.strokeRect(0,i*32,512,32);} for(let i=0;i<90;i++){ x.fillStyle='rgba(120,70,20,.09)'; x.fillRect(Math.random()*512,Math.random()*256,36,2);} return new THREE.CanvasTexture(c); })();
let platformParts=[], stagePlatforms=[];
function rowOffsets(d){ const n=Math.max(1,Math.round(d/0.72)); const offs=[]; for(let i=0;i<n;i++) offs.push((i-(n-1)/2)*0.7); return offs; }
function makePlatform(cx,z,w,d,top){
  const parts=[];
  parts.push(addStaticBox(w,0.24,d, cx, top-0.12, z, 0xffffff,{map:woodTex,rough:0.7,cast:true}));
  // stubby legs under the deck
  const legH=Math.max(0.2, top-0.24);
  [[-w/2+0.28,-d/2+0.28],[w/2-0.28,-d/2+0.28],[-w/2+0.28,d/2-0.28],[w/2-0.28,d/2-0.28]].forEach(function(ll){ parts.push(addStaticBox(0.26,legH,0.26, cx+ll[0], legH/2, z+ll[1], 0x6b4a2c,{cast:true})); });
  parts.forEach(function(p){ platformParts.push(p); });
  const P={cx:cx,z:z,w:w,d:d,top:top,rows:rowOffsets(d)};
  stagePlatforms.push(P);
  return P;
}
function clearPlatforms(){ platformParts.forEach(function(p){ scene.remove(p.mesh); if(p.body) world.removeBody(p.body); }); platformParts=[]; stagePlatforms=[]; }

// ---------- Targets ----------
const BOX=0.62, CAN_R=0.19, CAN_H=0.55, PLANK_L=2.05;
const crateColors=[0xb7793a,0xa5682f,0xc08347];
const canColors=[0xd64541,0x2f9e6e,0x3a7bd5,0xe8b93c,0x9b59b6];
let targets=[]; // {mesh,body,kind,points,gone}
function targetBody(mass,shape,isCyl,x,y,z){ const b=new CANNON.Body({mass:mass,material:matTarget}); if(isCyl){ const orient=new CANNON.Quaternion(); orient.setFromAxisAngle(new CANNON.Vec3(1,0,0), Math.PI/2); b.addShape(shape,new CANNON.Vec3(0,0,0),orient); } else { b.addShape(shape); } b.position.set(x,y,z); b.allowSleep=true; b.sleepSpeedLimit=0.35; b.sleepTimeLimit=0.5; b.addEventListener('collide', function(e){ const v=Math.abs(e.contact.getImpactVelocityAlongNormal()); if(v>1.4) soundHit(v); }); world.addBody(b); return b; }
function addCrate(x,z,baseY){
  const geo=new THREE.BoxGeometry(BOX,BOX,BOX);
  const mesh=new THREE.Mesh(geo, new THREE.MeshStandardMaterial({color:crateColors[targets.length%crateColors.length],roughness:0.9}));
  const edge=new THREE.LineSegments(new THREE.EdgesGeometry(geo), new THREE.LineBasicMaterial({color:0x5f3d17})); mesh.add(edge);
  mesh.castShadow=true; mesh.receiveShadow=true; mesh.position.set(x,baseY+BOX/2,z); scene.add(mesh);
  const body=targetBody(1.0,new CANNON.Box(new CANNON.Vec3(BOX/2,BOX/2,BOX/2)),false,x,baseY+BOX/2,z);
  targets.push({mesh:mesh,body:body,kind:'crate',points:10,gone:false});
}
function addCan(x,z,baseY){
  const mesh=new THREE.Mesh(new THREE.CylinderGeometry(CAN_R,CAN_R,CAN_H,18), new THREE.MeshStandardMaterial({color:canColors[targets.length%canColors.length],roughness:0.3,metalness:0.65}));
  const band=new THREE.Mesh(new THREE.CylinderGeometry(CAN_R+0.004, CAN_R+0.004, 0.09,18), new THREE.MeshStandardMaterial({color:0xf2f2f2,roughness:0.35,metalness:0.4})); mesh.add(band);
  mesh.castShadow=true; mesh.position.set(x,baseY+CAN_H/2,z); scene.add(mesh);
  const body=targetBody(0.55,new CANNON.Cylinder(CAN_R,CAN_R,CAN_H,10),true,x,baseY+CAN_H/2,z);
  targets.push({mesh:mesh,body:body,kind:'can',points:15,gone:false});
}
function addPlank(x,z,baseY){
  const mesh=new THREE.Mesh(new THREE.BoxGeometry(PLANK_L,0.12,0.62), new THREE.MeshStandardMaterial({color:0x8a5a2e,roughness:0.85}));
  mesh.castShadow=true; mesh.receiveShadow=true; mesh.position.set(x,baseY+0.06,z); scene.add(mesh);
  const body=targetBody(1.1,new CANNON.Box(new CANNON.Vec3(PLANK_L/2,0.06,0.31)),false,x,baseY+0.06,z);
  targets.push({mesh:mesh,body:body,kind:'plank',points:20,gone:false});
}
// ---------- Bomb blocks ----------
// Black block with a red band and a fuse. A hard impact (the ball, a fast
// falling block, another blast) sets its detonate flag; the explosion itself
// runs after the physics step (never inside a collide callback), blasting
// every nearby block — and the ball — away, and chain-detonating other bombs.
let explosions=[];
function addBomb(x,z,baseY){
  const geo=new THREE.BoxGeometry(BOX,BOX,BOX);
  const mesh=new THREE.Mesh(geo, new THREE.MeshStandardMaterial({color:0x23262e,roughness:0.45,metalness:0.35}));
  const edge=new THREE.LineSegments(new THREE.EdgesGeometry(geo), new THREE.LineBasicMaterial({color:0xff4d2e})); mesh.add(edge);
  const band=new THREE.Mesh(new THREE.BoxGeometry(BOX+0.02,0.13,BOX+0.02), new THREE.MeshStandardMaterial({color:0xff4d2e,roughness:0.5}));
  mesh.add(band);
  const fuse=new THREE.Mesh(new THREE.CylinderGeometry(0.04,0.04,0.15,8), new THREE.MeshStandardMaterial({color:0xd8b25a,roughness:0.6,metalness:0.6}));
  fuse.position.y=BOX/2+0.06; fuse.rotation.z=0.3; mesh.add(fuse);
  mesh.castShadow=true; mesh.receiveShadow=true; mesh.position.set(x,baseY+BOX/2,z); scene.add(mesh);
  const body=targetBody(1.2,new CANNON.Box(new CANNON.Vec3(BOX/2,BOX/2,BOX/2)),false,x,baseY+BOX/2,z);
  const t={mesh:mesh,body:body,kind:'bomb',points:30,gone:false,detonate:false};
  targets.push(t);
  body.addEventListener('collide', function(e){ const v=Math.abs(e.contact.getImpactVelocityAlongNormal()); if(v>2.3 && !t.gone) t.detonate=true; });
}
function soundBoom(){ try{ if(!audioCtx) audioCtx=new (window.AudioContext||window.webkitAudioContext)(); if(audioCtx.state==='suspended') audioCtx.resume(); const dur=0.5; const len=Math.floor(audioCtx.sampleRate*dur); const buffer=audioCtx.createBuffer(1,len,audioCtx.sampleRate); const d=buffer.getChannelData(0); for(let i=0;i<len;i++){ d[i]=(Math.random()*2-1)*Math.pow(1-i/len,1.8); } const src=audioCtx.createBufferSource(); src.buffer=buffer; const f=audioCtx.createBiquadFilter(); f.type='lowpass'; f.frequency.value=420; const g=audioCtx.createGain(); g.gain.setValueAtTime(0.5,audioCtx.currentTime); g.gain.exponentialRampToValueAtTime(0.001,audioCtx.currentTime+dur); src.connect(f); f.connect(g); g.connect(audioCtx.destination); src.start(); beep(58,0.4,'sine',0.3); }catch(e){} }
function spawnExplosionFx(pos){
  const flash=new THREE.Mesh(new THREE.SphereGeometry(0.5,18,14), new THREE.MeshBasicMaterial({color:0xffa63f,transparent:true,opacity:0.9,depthWrite:false}));
  flash.position.copy(pos); scene.add(flash);
  explosions.push({mesh:flash,life:0.32,maxLife:0.32,core:false});
  const core=new THREE.Mesh(new THREE.SphereGeometry(0.3,14,12), new THREE.MeshBasicMaterial({color:0xfff3b0,transparent:true,opacity:1,depthWrite:false}));
  core.position.copy(pos); scene.add(core);
  explosions.push({mesh:core,life:0.22,maxLife:0.22,core:true});
  spawnBurst(pos,0xff7a2e); spawnBurst(pos,0xffc93f); spawnBurst(pos,0x3a3f47);
}
function explodeBomb(t){
  if(t.gone) return;
  t.gone=true; t.detonate=false; destroyedThisStage++;
  totalScore+=t.points;
  const pos=new THREE.Vector3().copy(t.body.position);
  scene.remove(t.mesh); world.removeBody(t.body);
  spawnExplosionFx(pos); soundBoom(); scorePopup(pos,t.points,'bomb');
  const R=2.9;
  function blast(body){
    const dx=body.position.x-pos.x, dy=body.position.y-pos.y, dz=body.position.z-pos.z;
    const dist=Math.sqrt(dx*dx+dy*dy+dz*dz);
    if(dist>R) return;
    const fall=1-dist/R;
    const sp=3.2+8.5*fall;
    const inv=1/Math.max(0.45,dist);
    body.velocity.x+=dx*inv*sp; body.velocity.z+=dz*inv*sp;
    body.velocity.y+=dy*inv*sp*0.6 + 3.4*fall + 1.2;
    body.angularVelocity.x+=(Math.random()-0.5)*7*fall;
    body.angularVelocity.z+=(Math.random()-0.5)*7*fall;
    body.wakeUp();
  }
  targets.forEach(function(o){ if(!o.gone && o!==t) blast(o.body); });
  if(ballBody && ballMesh && !ballGone && ballBody.type===CANNON.Body.DYNAMIC) blast(ballBody);
  // chain reaction: other bombs caught in the blast go off a beat later
  targets.forEach(function(o){ if(!o.gone && o.kind==='bomb' && o!==t){ const dx=o.body.position.x-pos.x, dy=o.body.position.y-pos.y, dz=o.body.position.z-pos.z; if(dx*dx+dy*dy+dz*dz < R*R) setTimeout(function(){ explodeBomb(o); },150); } });
  if(targetsRemaining()===0) spawnConfetti();
  updateHUD();
}
function clearTargets(){ targets.forEach(function(t){ t.gone=true; scene.remove(t.mesh); world.removeBody(t.body); }); targets=[]; }
// ---------- Stage building on platforms ----------
// Stacks reuse the proven patterns (pyramids, crate walls, twin towers with a
// plank, cans centered over crates) — now spread over 1–3 rafts of different
// widths, depths and deck heights as the stages progress.
// Target counts: 15 / 27 / 31 / 48 / 51 / 60. Stages 4–6 carry bomb blocks.
function pCrates(P,row,y,n,xoff){ const z=P.z+P.rows[row]; for(let i=0;i<n;i++) addCrate(P.cx+(xoff||0)+(i-(n-1)/2)*0.64, z, y); }
function pPyr(P,row,rowsN,xoff){ const z=P.z+P.rows[row]; for(let r=0;r<rowsN;r++){ const n=rowsN-r; for(let i=0;i<n;i++) addCrate(P.cx+(xoff||0)+(i-(n-1)/2)*0.64, z, P.top+r*BOX); } }
function pTower(P,row,x,h){ const z=P.z+P.rows[row]; for(let i=0;i<h;i++) addCrate(P.cx+x, z, P.top+i*BOX); }
function pCan(P,row,x,y){ addCan(P.cx+x, P.z+P.rows[row], y); }
function pPlank(P,row,x,y){ addPlank(P.cx+x, P.z+P.rows[row], y); }
function pCanRow(P,row,y,xs){ xs.forEach(function(x){ pCan(P,row,x,y); }); }
function pBomb(P,row,x,y){ addBomb(P.cx+x, P.z+P.rows[row], y); }

const STAGES=[
 { balls:4, build:function(){ const P=makePlatform(0,-5.8,2.4,1.6,1.0); const T=P.top;
   pPyr(P,0,3,0); pCan(P,0,0,T+3*BOX); pCan(P,0,0,T+3*BOX+CAN_H);
   pCrates(P,1,T,3); pCrates(P,1,T+BOX,2); pCanRow(P,1,T+2*BOX,[-0.32,0.32]); } },
 { balls:5, build:function(){ const L=makePlatform(-1.85,-5.8,2.3,1.6,1.0), R=makePlatform(1.85,-5.8,2.3,1.6,1.5);
   pPyr(L,0,3,0); pCan(L,0,0,L.top+3*BOX);
   pCrates(L,1,L.top,2); pCanRow(L,1,L.top+BOX,[-0.32,0.32]);
   pCrates(R,0,R.top,3); pCrates(R,0,R.top+BOX,3); pPlank(R,0,0,R.top+2*BOX); pCanRow(R,0,R.top+2*BOX+0.12,[-0.6,0,0.6]);
   pCrates(R,1,R.top,3); pCrates(R,1,R.top+BOX,2); pCan(R,1,0,R.top+2*BOX); } },
 { balls:6, build:function(){ const L=makePlatform(-2.7,-5.5,1.7,1.6,0.9), C=makePlatform(0,-6.1,2.4,1.6,1.9), R=makePlatform(2.7,-5.5,1.7,1.6,0.9);
   [L,R].forEach(function(P){ pTower(P,0,0,2); pCan(P,0,0,P.top+2*BOX); pCrates(P,1,P.top,2); pCanRow(P,1,P.top+BOX,[-0.32,0.32]); });
   pTower(C,0,-0.32,3); pTower(C,0,0.32,3); pPlank(C,0,0,C.top+3*BOX); pCanRow(C,0,C.top+3*BOX+0.12,[-0.55,0,0.55]);
   pPyr(C,1,3,0); pCan(C,1,0,C.top+3*BOX); } },
 { balls:7, build:function(){ const L=makePlatform(-1.78,-5.8,3.0,2.3,1.2), R=makePlatform(1.78,-5.8,3.0,2.3,1.2);
   [L,R].forEach(function(P){ pCrates(P,0,P.top,4); pCrates(P,0,P.top+BOX,4); pCanRow(P,0,P.top+2*BOX,[-0.96,0.96]); pBomb(P,0,0,P.top+2*BOX);
     pPyr(P,1,3,0); pBomb(P,1,0,P.top+3*BOX);
     pCrates(P,2,P.top,3); pCanRow(P,2,P.top+BOX,[-0.64,0,0.64]); }); } },
 { balls:8, build:function(){ const L=makePlatform(-2.75,-5.5,1.9,1.6,0.8), C=makePlatform(0,-6.1,2.6,2.3,2.3), R=makePlatform(2.75,-5.5,1.9,1.6,1.4);
   pCrates(L,0,L.top,2); pCrates(L,0,L.top+BOX,2); pCrates(L,0,L.top+2*BOX,2); pCanRow(L,0,L.top+3*BOX,[-0.32,0.32]);
   pCrates(L,1,L.top,2); pCrates(L,1,L.top+BOX,2); pBomb(L,1,0,L.top+2*BOX);
   pTower(C,0,-0.32,3); pTower(C,0,0.32,3); pPlank(C,0,0,C.top+3*BOX); pCanRow(C,0,C.top+3*BOX+0.12,[-0.55,0,0.55]);
   pPyr(C,1,3,0); pCan(C,1,0,C.top+3*BOX);
   pCrates(C,2,C.top,3); pCrates(C,2,C.top+BOX,3); pCanRow(C,2,C.top+2*BOX,[-0.64,0.64]); pBomb(C,2,0,C.top+2*BOX);
   pCrates(R,0,R.top,2); pCrates(R,0,R.top+BOX,2); pPlank(R,0,0,R.top+2*BOX); pCanRow(R,0,R.top+2*BOX+0.12,[-0.5,0.5]);
   pPyr(R,1,2,0); pBomb(R,1,0,R.top+2*BOX); pCan(R,1,0,R.top+2*BOX+BOX); } },
 { balls:9, build:function(){ const L=makePlatform(-2.8,-5.5,2.2,1.6,1.2), C=makePlatform(0,-6.1,3.0,2.3,1.8), R=makePlatform(2.8,-5.5,2.2,1.6,1.2);
   [L,R].forEach(function(P){ pCrates(P,0,P.top,3); pCrates(P,0,P.top+BOX,3); pPlank(P,0,0,P.top+2*BOX); pCanRow(P,0,P.top+2*BOX+0.12,[-0.6,0.6]); pBomb(P,0,0,P.top+2*BOX+0.12);
     pPyr(P,1,2,0); pCan(P,1,0,P.top+2*BOX); pCan(P,1,0,P.top+2*BOX+CAN_H); });
   pCrates(C,0,C.top,4); pCrates(C,0,C.top+BOX,4); pPlank(C,0,0,C.top+2*BOX); pCanRow(C,0,C.top+2*BOX+0.12,[-0.75,-0.25,0.25,0.75]);
   pTower(C,1,-0.32,3); pTower(C,1,0.32,3); pPlank(C,1,0,C.top+3*BOX); pCanRow(C,1,C.top+3*BOX+0.12,[-0.55,0,0.55]);
   pPyr(C,2,3,0); pBomb(C,2,0,C.top+3*BOX); } },
];

// ---------- Ball ----------
// The ball's rest position is launcherPos() — it moves with the orbiting launcher.
const ballColors=[0xff4d2e,0x2563eb,0x111827,0x7c3aed,0x059669,0xffb020];
let ballMesh, ballBody, ballIndex=0, ballGone=false;
function createBall(){
  ballGone=false;
  if(ballMesh){ scene.remove(ballMesh); }
  if(ballBody){ world.removeBody(ballBody); }
  const color=ballColors[ballIndex % ballColors.length];
  ballMesh=new THREE.Mesh(new THREE.SphereGeometry(0.36,28,28), new THREE.MeshStandardMaterial({color:color,roughness:0.25,metalness:0.15}));
  ballMesh.castShadow=true; ballMesh.position.copy(launcherPos()); scene.add(ballMesh);
  [[0.12,0.28,0.18],[-0.08,0.30,0.20],[0.02,0.18,0.30]].forEach(function(h){ const hole=new THREE.Mesh(new THREE.SphereGeometry(0.055,10,10), new THREE.MeshStandardMaterial({color:0x0a0a0a,roughness:0.9})); hole.position.set(h[0],h[1],h[2]); ballMesh.add(hole); });
  ballBody=new CANNON.Body({mass:6, material:matBall, shape:new CANNON.Sphere(0.36)});
  const LP=launcherPos(); ballBody.position.set(LP.x,LP.y,LP.z);
  ballBody.type=CANNON.Body.KINEMATIC;
  world.addBody(ballBody);
}
const postMat=new THREE.MeshStandardMaterial({color:0x2b2118,roughness:0.8});
const launcherPosts=[];
[-0.55,0.55].forEach(function(x){ const post=new THREE.Mesh(new THREE.CylinderGeometry(0.07,0.09,1.0,10), postMat); post.position.set(x,0.5,7.8); post.castShadow=true; scene.add(post); launcherPosts.push(post); });
const anchorL=new THREE.Vector3(-0.55,0.95,7.8), anchorR=new THREE.Vector3(0.55,0.95,7.8);
// Move the whole launcher rig (stand posts, elastic anchors, and the waiting
// ball) to the current orbit angle. A ball already launched is left alone.
function placeLauncher(){
  const L=launcherPos(), O=outwardDir(), P=perpDir();
  const cx=L.x+O.x*0.8, cz=L.z+O.z*0.8;
  launcherPosts[0].position.set(cx-P.x*0.55, 0.5, cz-P.z*0.55);
  launcherPosts[1].position.set(cx+P.x*0.55, 0.5, cz+P.z*0.55);
  anchorL.set(cx-P.x*0.55, 0.95, cz-P.z*0.55);
  anchorR.set(cx+P.x*0.55, 0.95, cz+P.z*0.55);
  if(ballMesh&&ballBody&&ballBody.type===CANNON.Body.KINEMATIC&&!dragStart){
    ballMesh.position.copy(L);
    ballBody.position.set(L.x,L.y,L.z);
  }
}
// Launcher position on the previous frame. The play camera inherits the
// launcher's exact per-frame orbit movement, so while rotating, the ball
// and the camera travel at the same speed instead of the camera easing
// behind the ball.
const prevLauncherPos=launcherPos();
const elasticMat=new THREE.LineBasicMaterial({color:0xffb020,linewidth:2});
let elastic=new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(),new THREE.Vector3(),new THREE.Vector3()]), elasticMat); elastic.visible=false; scene.add(elastic);
const trajDots=[];
for(let i=0;i<22;i++){ const d=new THREE.Mesh(new THREE.SphereGeometry(0.07,8,8), new THREE.MeshBasicMaterial({color:0xffffff,transparent:true,opacity:0.85})); d.visible=false; scene.add(d); trajDots.push(d); }
function hideTraj(){ trajDots.forEach(function(d){ d.visible=false; }); elastic.visible=false; }
function showTraj(vel){
  const g=-9.82; const pos=launcherPos();
  for(let i=0;i<trajDots.length;i++){ const t=0.12*(i+1); const p=new THREE.Vector3(pos.x+vel.x*t, Math.max(0.07,pos.y+vel.y*t+0.5*g*t*t), pos.z+vel.z*t); const ddx=p.x-stageCenter.x, ddz=p.z-stageCenter.z; trajDots[i].position.copy(p); trajDots[i].visible=(ddx*ddx+ddz*ddz)<420 && p.y>=0.05; trajDots[i].material.opacity=0.9 - i*0.03; }
  elastic.visible=true;
  elastic.geometry.setFromPoints([anchorL, ballMesh.position.clone(), anchorR]);
}

// ---------- Debris bursts ----------
let bursts=[];
function spawnBurst(pos,color){
  for(let i=0;i<6;i++){ const m=new THREE.Mesh(new THREE.BoxGeometry(0.11,0.11,0.11), new THREE.MeshBasicMaterial({color:color,transparent:true})); m.position.copy(pos); scene.add(m); bursts.push({mesh:m,vel:new THREE.Vector3((Math.random()-0.5)*3.4,2.2+Math.random()*2.2,(Math.random()-0.5)*3.4),life:0.6}); }
}

// ---------- Game state ----------
let state='aiming'; // aiming, intro, flying, settling, clear, failed
let stageIndex=0, totalScore=0, scoreAtStageStart=0, ballsLeft=3, destroyedThisStage=0, totalTargets=0, launchTime=0, settleTime=0;
let dragStart=null, dragCurrent=null;
const ANGLE_MAX=Math.PI/2; // launcher orbits ±90° around the platforms — all the way to the target's side
// stage intro: hold a fixed close-up of the stack ~1s, then pull back to the play camera
let introT=0, introDone=false;
const INTRO_HOLD=1.0, INTRO_PULL=1.25;
const INTRO_POS=new THREE.Vector3(1.6,2.1,-2.9), INTRO_LOOK=new THREE.Vector3(0,1.85,-5.8);
function camBasePos(){ if(camMode===0){ const L=launcherPos(), O=outwardDir(); return new THREE.Vector3(L.x+O.x*5.2, 4.2, L.z+O.z*5.2); } if(camMode===1) return new THREE.Vector3(7.4,3.2,-1); return new THREE.Vector3(0,9.5,3.4); }

const els={score:document.getElementById('score'),stageLabel:document.getElementById('stageLabel'),targetsLeft:document.getElementById('targetsLeft'),ballsLeft:document.getElementById('ballsLeft'),ballsStat:document.getElementById('ballsStat'),bgGauge:document.getElementById('ballGauge'),bgFill:document.getElementById('bgFill'),banner:document.getElementById('banner'),bannerBig:document.getElementById('bannerBig'),bannerSub:document.getElementById('bannerSub'),centerCta:document.getElementById('centerCta'),ctaTitle:document.getElementById('ctaTitle'),ctaSub:document.getElementById('ctaSub'),ctaBtn:document.getElementById('ctaBtn'),anglePad:document.getElementById('anglePad'),hintText:document.getElementById('hintText'),hintBar:document.querySelector('.hint'),popups:document.getElementById('popups')};
function targetsRemaining(){ return targets.filter(function(t){ return !t.gone; }).length; }
function updateHUD(){ els.score.textContent=totalScore; els.stageLabel.textContent=(stageIndex+1)+' / '+STAGES.length; els.targetsLeft.textContent=targetsRemaining(); els.ballsLeft.textContent=ballsLeft; els.ballsStat.classList.toggle('danger', ballsLeft<=1 && state!=='clear'); }
let lastPower=0;
function setPowerUI(power){ lastPower=power; const pct=Math.round(Math.max(0,Math.min(1,power))*100); els.bgFill.style.height=pct+'%'; }
// Banner / CTA texts are always built from the dictionary at render time,
// from the language-independent bannerCtx / ctaCtx — never stored as baked
// strings — so every show and every language change uses the current LANG.
function bannerTexts(){
  const ctx=bannerCtx||{kind:'stage',stageIndex:0,targets:15,balls:4};
  if(ctx.kind==='allClear') return {big:'ALL CLEAR! <em>🏆</em>', sub:t('allClearSub',{score:ctx.score||0})};
  if(ctx.kind==='clear') return {big:'STAGE CLEAR! <em>✦</em>', sub:t('clearSub',{bonus:ctx.bonus||0})};
  if(ctx.kind==='fail') return {big:'FAILED… <em>💦</em>', sub:t('failSub',{left:ctx.left||0})};
  const idx=ctx.stageIndex||0;
  return {big:'STAGE '+(idx+1)+' <em>📦</em>', sub:t('bannerSub',{name:stageName(idx),targets:ctx.targets||0,balls:ctx.balls||0})+(idx>=3?t('bombNote'):'')};
}
function renderBanner(){ const txt=bannerTexts(); els.bannerBig.innerHTML=txt.big; els.bannerSub.textContent=txt.sub; }
let bannerTimer=null;
function showBanner(ctx,ms){ if(ctx) bannerCtx=ctx; renderBanner(); els.banner.classList.add('show'); if(bannerTimer) clearTimeout(bannerTimer); bannerTimer=setTimeout(function(){ els.banner.classList.remove('show'); }, ms||2200); }
// big centered panel shown on stage clear / fail / all-clear, with the action button in the middle of the screen
function ctaTexts(){
  const ctx=ctaCtx||{mode:'next',bonus:0,score:0,left:0};
  if(ctx.mode==='restart') return {title:t('allClearTitle'), sub:t('allClearSubCta',{score:ctx.score||0}), btn:t('allClearBtn')};
  if(ctx.mode==='retry') return {title:t('failTitle',{left:ctx.left||0}), sub:t('failSubCta'), btn:t('failBtn')};
  return {title:t('clearTitle'), sub:t('clearSubCta',{bonus:ctx.bonus||0,score:ctx.score||0}), btn:t('clearBtn')};
}
function renderCta(){ const txt=ctaTexts(); els.ctaTitle.textContent=txt.title; els.ctaSub.textContent=txt.sub; els.ctaBtn.textContent=txt.btn; els.ctaBtn.dataset.mode=(ctaCtx&&ctaCtx.mode)||'next'; }
function showCta(ctx){ if(ctx) ctaCtx=ctx; renderCta(); els.centerCta.classList.add('show'); }
function hideCta(){ els.centerCta.classList.remove('show'); }
function scorePopup(worldPos,points,kind){
  const v=worldPos.clone().project(camera); if(v.z>1) return;
  const x=(v.x*0.5+0.5)*innerWidth, y=(-v.y*0.5+0.5)*innerHeight;
  const el=document.createElement('div'); el.className='pop'+(kind==='can'?' can':''); el.textContent='+'+points;
  el.style.left=Math.max(30,Math.min(innerWidth-30,x))+'px'; el.style.top=Math.max(30,y)+'px';
  els.popups.appendChild(el); setTimeout(function(){ el.remove(); },950);
}

function startStage(idx,titleOnly){
  stageIndex=idx;
  scoreAtStageStart=totalScore;
  clearTargets(); clearPlatforms(); bursts.forEach(function(b){ scene.remove(b.mesh); }); bursts=[]; explosions.forEach(function(x){ scene.remove(x.mesh); }); explosions=[]; clearSplashFx();
  STAGES[stageIndex].build();
  // orbit center = centroid of this stage's platforms; the radius keeps the
  // launcher's front spot at z=7, exactly where it used to sit
  if(stagePlatforms.length){ let sx=0,sz=0; stagePlatforms.forEach(function(P){ sx+=P.cx; sz+=P.z; }); stageCenter.set(sx/stagePlatforms.length,0,sz/stagePlatforms.length); ORBIT_R=7.0-stageCenter.z; }
  totalTargets=targets.length; destroyedThisStage=0;
  ballsLeft=STAGES[stageIndex].balls; ballIndex=stageIndex; angleOffset=0;
  createBall(); placeLauncher(); state=titleOnly?'title':'intro'; introT=0; introDone=false;
  let maxTop=1, halfSpan=1.2;
  stagePlatforms.forEach(function(P){ maxTop=Math.max(maxTop,P.top); halfSpan=Math.max(halfSpan, Math.abs(P.cx)+P.w/2); });
  INTRO_POS.set(Math.max(1.6, Math.min(3.2, halfSpan*0.85)), 1.55+maxTop*0.55, -2.7+halfSpan*0.32);
  INTRO_LOOK.set(0, 1.05+maxTop*0.5, -5.8);
  camera.position.copy(INTRO_POS); camera.lookAt(INTRO_LOOK);
  hideCta();
  setPowerUI(0,0);
  updateHUD();
  if(!titleOnly){
    showBanner({kind:'stage',stageIndex:stageIndex,targets:totalTargets,balls:ballsLeft}, 2600);
    els.hintText.innerHTML=t('hintIntro');
  }
}

// ---------- Confetti (all targets down!) ----------
const confettiEl=document.getElementById('confetti');
const confettiColors=['#ff4d2e','#ffb020','#2ee06f','#3a7bd5','#ff6ec7','#ffe74c','#ffffff'];
function spawnConfetti(){
  for(let i=0;i<130;i++){
    const p=document.createElement('div'); p.className='confetti-piece';
    const w=6+Math.random()*6, h=8+Math.random()*9;
    p.style.left=(Math.random()*100)+'%';
    p.style.width=w+'px'; p.style.height=h+'px';
    p.style.background=confettiColors[i%confettiColors.length];
    if(Math.random()<0.3) p.style.borderRadius='50%';
    p.style.setProperty('--dx', ((Math.random()*2-1)*130).toFixed(0)+'px');
    p.style.setProperty('--rot', ((Math.random()<0.5?-1:1)*(360+Math.random()*720)).toFixed(0)+'deg');
    p.style.animationDuration=(2.6+Math.random()*1.7).toFixed(2)+'s';
    p.style.animationDelay=(Math.random()*0.55).toFixed(2)+'s';
    confettiEl.appendChild(p);
  }
  setTimeout(function(){ confettiEl.innerHTML=''; },5200);
}

let splashRings=[];
let splashDrops=[];
let waterColumns=[];
const splashDropGeo=new THREE.SphereGeometry(0.05,8,8);
function spawnSplash(x,z,scale){
  scale=scale||1;
  const m=new THREE.Mesh(new THREE.RingGeometry(0.16,0.3,22), new THREE.MeshBasicMaterial({color:0xeafaff,transparent:true,opacity:0.9,side:THREE.DoubleSide}));
  m.rotation.x=-Math.PI/2; m.position.set(x,0.04,z); m.scale.setScalar(0.6*scale); scene.add(m);
  splashRings.push({mesh:m,life:0.6,maxLife:0.6,base:0.6*scale,grow:2.6*scale});
  const m2=new THREE.Mesh(new THREE.RingGeometry(0.1,0.2,20), new THREE.MeshBasicMaterial({color:0xbfe6ff,transparent:true,opacity:0.75,side:THREE.DoubleSide}));
  m2.rotation.x=-Math.PI/2; m2.position.set(x,0.05,z); m2.scale.setScalar(0.5*scale); scene.add(m2);
  splashRings.push({mesh:m2,life:0.85,maxLife:0.85,base:0.5*scale,grow:3.6*scale});
}
// Full splash: expanding rings + a rising water column + flying droplets + splash sound.
// strength ~0.7 for a can, ~1.0 for a crate, ~1.2 for a plank, ~1.6 for the heavy ball.
function spawnSplashEffect(x,z,strength){
  strength=strength||1;
  spawnSplash(x,z,strength);
  // water column (噴き上がる水柱)
  const colH=(0.85+Math.random()*0.3)*strength;
  const colGeo=new THREE.CylinderGeometry(0.13*strength,0.32*strength,1,12,1,true);
  const colMat=new THREE.MeshBasicMaterial({color:0xd8f2ff,transparent:true,opacity:0.78,side:THREE.DoubleSide,depthWrite:false});
  const col=new THREE.Mesh(colGeo,colMat);
  col.position.set(x,0.02,z); col.scale.set(1,0.02,1); scene.add(col);
  waterColumns.push({mesh:col,life:0.45,maxLife:0.45,height:colH});
  // foam cap on top of the column
  const cap=new THREE.Mesh(new THREE.SphereGeometry(0.24*strength,10,8), new THREE.MeshBasicMaterial({color:0xffffff,transparent:true,opacity:0.85,depthWrite:false}));
  cap.position.set(x,0.06,z); cap.scale.y=0.55; scene.add(cap);
  waterColumns.push({mesh:cap,life:0.4,maxLife:0.4,height:colH,isCap:true});
  // droplets (しぶき)
  const count=Math.round(20*strength)+10;
  for(let i=0;i<count;i++){
    const m=new THREE.Mesh(splashDropGeo, new THREE.MeshBasicMaterial({color:Math.random()<0.55?0xffffff:0xaedfff,transparent:true,opacity:0.95,depthWrite:false}));
    m.scale.setScalar(0.6+Math.random()*1.1*strength);
    m.position.set(x+(Math.random()-0.5)*0.2*strength, 0.06, z+(Math.random()-0.5)*0.2*strength);
    scene.add(m);
    const center=Math.random()<0.38; // central drops shoot straight up with the column
    const ang=Math.random()*Math.PI*2, rad=(0.35+Math.random()*0.95)*strength;
    const vx=center?(Math.random()-0.5)*0.7:Math.cos(ang)*rad;
    const vz=center?(Math.random()-0.5)*0.7:Math.sin(ang)*rad;
    const vy=center?3.1+Math.random()*2.0*strength:1.7+Math.random()*1.9*strength;
    const life=0.65+Math.random()*0.4;
    splashDrops.push({mesh:m,vel:new THREE.Vector3(vx,vy,vz),life:life,maxLife:life});
  }
  soundSplash(strength);
}
function clearSplashFx(){
  splashRings.forEach(function(s){ scene.remove(s.mesh); }); splashRings=[];
  splashDrops.forEach(function(s){ scene.remove(s.mesh); }); splashDrops=[];
  waterColumns.forEach(function(s){ scene.remove(s.mesh); }); waterColumns=[];
}
// The player's ball sinks and vanishes the moment it hits the sea, with a big splash.
function destroyBall(){
  if(ballGone||!ballBody||!ballMesh) return;
  ballGone=true;
  const px=ballBody.position.x, pz=ballBody.position.z;
  spawnSplashEffect(px,pz,1.6);
  scene.remove(ballMesh); world.removeBody(ballBody);
  ballMesh=null; ballBody=null;
  hideTraj();
  if(state==='flying'){ state='settling'; settleTime=0; }
  els.hintText.innerHTML=t('hintBallSunk');
}
function destroyTarget(t){
  t.gone=true; destroyedThisStage++;
  totalScore+=t.points;
  const pos=new THREE.Vector3().copy(t.body.position);
  spawnSplashEffect(pos.x,pos.z, t.kind==='can'?0.75 : t.kind==='plank'?1.2 : 1.0);
  spawnBurst(pos, t.kind==='can'?0xd8dde6:0xc98d4e);
  scene.remove(t.mesh); world.removeBody(t.body);
  soundPop(); scorePopup(pos,t.points,t.kind);
  if(targetsRemaining()===0) spawnConfetti();
  updateHUD();
}

function computeVelocity(){
  if(!dragStart||!dragCurrent) return {vel:new THREE.Vector3(0,0,0),power:0,angle:angleOffset};
  const dx=(dragCurrent.x-dragStart.x);
  const dy=(dragCurrent.y-dragStart.y);
  const pull=Math.max(0, Math.min(220, dy));
  const powerNorm=pull/220;
  const side=Math.max(-1,Math.min(1, dx/180));
  // heading: from the launcher's orbit position straight at the platforms'
  // center (heading angle = -angleOffset), plus the slingshot's sideways
  // pull as a small fine-aim tilt
  const angle = -angleOffset + (-side*0.38);
  const speed= 9 + powerNorm*20;
  const vy= 2.4 + powerNorm*6.0;
  const vel=new THREE.Vector3(Math.sin(angle)*speed, vy, -Math.cos(angle)*speed);
  return {vel:vel,power:powerNorm,angle:angleOffset};
}
function onDragMove(){
  const cv=computeVelocity(); const vel=cv.vel, power=cv.power, angle=cv.angle;
  setPowerUI(power, angle*57.3);
  els.bgGauge.classList.toggle('dragging', power>0.03);
  if(power>0.03){
    const L=launcherPos(), O=outwardDir();
    ballMesh.position.set(L.x + O.x*power*0.7, Math.max(0.36, L.y - (dragCurrent.y-dragStart.y)*0.0012), L.z + O.z*power*0.7);
    ballBody.position.set(ballMesh.position.x, ballMesh.position.y, ballMesh.position.z);
    showTraj(vel);
  } else { hideTraj(); ballMesh.position.copy(launcherPos()); }
}
function launch(){
  const cv=computeVelocity(); const vel=cv.vel, power=cv.power;
  hideTraj(); els.bgGauge.classList.remove('dragging');
  if(power<0.08){ const L=launcherPos(); ballMesh.position.copy(L); ballBody.position.set(L.x,L.y,L.z); setPowerUI(0, angleOffset*57.3); return; }
  soundLaunch();
  chaseDir.set(vel.x,0,vel.z);
  if(chaseDir.lengthSq()<0.001) chaseDir.set(0,0,-1);
  chaseDir.normalize();
  ballBody.type=CANNON.Body.DYNAMIC; ballBody.wakeUp();
  ballBody.velocity.set(vel.x, vel.y, vel.z);
  ballBody.angularVelocity.set(vel.z*0.2,0,-vel.x*0.3);
  state='flying'; launchTime=performance.now(); ballsLeft--; updateHUD();
  els.hintText.innerHTML=t('hintLaunched');
}
function evaluateThrow(){
  if(targetsRemaining()===0){
    const bonus=ballsLeft*30;
    totalScore+=bonus; state='clear'; updateHUD();
    if(stageIndex>=STAGES.length-1){
      showBanner({kind:'allClear',score:totalScore}, 3400);
      showCta({mode:'restart',score:totalScore});
      els.hintText.innerHTML=t('hintAllClear');
    } else {
      showBanner({kind:'clear',bonus:bonus}, 2800);
      showCta({mode:'next',bonus:bonus,score:totalScore});
      els.hintText.innerHTML=t('hintClear');
    }
    soundClear();
  } else if(ballsLeft<=0){
    state='failed';
    showBanner({kind:'fail',left:targetsRemaining()}, 2600);
    soundFail();
    showCta({mode:'retry',left:targetsRemaining()});
    els.hintText.innerHTML=t('hintFail');
    updateHUD();
  } else {
    ballIndex++; createBall(); state='aiming';
    els.hintText.innerHTML=t('hintNextBall',{balls:ballsLeft,targets:targetsRemaining()});
    setPowerUI(0, angleOffset*57.3);
    updateHUD();
  }
}
function retryStage(){ totalScore=scoreAtStageStart; startStage(stageIndex); }

// ---------- Input ----------
const el=renderer.domElement;
el.style.touchAction='none';
function pointerPos(e){ return {x:e.clientX,y:e.clientY}; }
el.addEventListener('pointerdown', function(e){ if(state!=='aiming') return; dragStart=pointerPos(e); dragCurrent=dragStart; el.setPointerCapture(e.pointerId); });
el.addEventListener('pointermove', function(e){ if(!dragStart||state!=='aiming') return; dragCurrent=pointerPos(e); onDragMove(); });
el.addEventListener('pointerup', function(e){ if(!dragStart||state!=='aiming') return; dragCurrent=pointerPos(e); onDragMove(); launch(); dragStart=null; dragCurrent=null; });
el.addEventListener('pointercancel', function(){ dragStart=null; hideTraj(); });
// ---------- Smooth orbit input ----------
// While a ◀▶ button or an arrow key is held, the launcher's orbit velocity
// eases toward full speed and eases back out on release; the angle itself is
// integrated per frame in the main loop, so holding a button glides the
// launcher (and the camera riding with it) instead of stepping in chunks.
let keyDir=0;
const heldDirs=new Set();
let rotVel=0;
const ROT_SPEED=2.0; // rad/s at full speed while held (~115°/s)
window.addEventListener('keydown', function(e){
  if(e.key==='ArrowLeft') keyDir=-1;
  else if(e.key==='ArrowRight') keyDir=1;
  if(e.key===' '){ e.preventDefault(); cycleCamera(); }
});
window.addEventListener('keyup', function(e){
  if(e.key==='ArrowLeft'&&keyDir===-1) keyDir=0;
  if(e.key==='ArrowRight'&&keyDir===1) keyDir=0;
});
// ---------- On-screen angle buttons (◀ ▶) ----------
// Press-and-hold: the button just marks its direction as held; the main loop
// integrates the orbit angle with eased velocity, so the turn is smooth for
// as long as the button is down, all the way to ±90° (the target's side).
let aimPreviewTimer=null;
function showAimPreview(){
  if(state!=='aiming'||dragStart) return;
  const vel=new THREE.Vector3(-Math.sin(angleOffset)*19, 5.4, -Math.cos(angleOffset)*19);
  showTraj(vel);
  if(aimPreviewTimer) clearTimeout(aimPreviewTimer);
  aimPreviewTimer=setTimeout(function(){ if(!dragStart) hideTraj(); },1500);
}
function bindAngleBtn(id,dir){
  const b=document.getElementById(id);
  function on(e){ e.preventDefault(); heldDirs.add(dir); if(Math.sign(rotVel)!==dir) rotVel=dir*ROT_SPEED*0.4; beep(700,0.05,'square',0.04); }
  function off(){ heldDirs.delete(dir); }
  b.addEventListener('pointerdown', on);
  b.addEventListener('pointerup', off);
  b.addEventListener('pointerleave', off);
  b.addEventListener('pointercancel', off);
  b.addEventListener('contextmenu', function(e){ e.preventDefault(); });
}
bindAngleBtn('angleLeft',-1);
bindAngleBtn('angleRight',1);
function cycleCamera(){ camMode=(camMode+1)%3; setCamBase(); }
document.getElementById('cameraBtn').onclick=cycleCamera;
document.getElementById('resetBallBtn').onclick=function(){ if(state==='aiming'){ const L=launcherPos(); ballMesh.position.copy(L); ballBody.position.set(L.x,L.y,L.z); hideTraj(); setPowerUI(0, angleOffset*57.3); } else if(state==='flying'){ state='settling'; settleTime=99; } };
document.getElementById('retryBtn').onclick=function(){ if(state==='aiming'||state==='failed'||state==='clear') retryStage(); };
els.ctaBtn.onclick=function(){ const m=els.ctaBtn.dataset.mode; if(m==='next') startStage(stageIndex+1); else if(m==='retry') retryStage(); else if(m==='restart'){ totalScore=0; startStage(0); } };

// ---------- Title screen & hamburger menu ----------
// The game boots into the 'title' state: stage 1 is built behind the title
// overlay and the camera slowly orbits it. 「ゲームスタート」starts stage 1
// for real (intro close-up + banner).
const titleScreenEl=document.getElementById('titleScreen');
document.getElementById('startBtn').onclick=function(){
  document.body.classList.remove('title-on');
  titleScreenEl.classList.add('hidden');
  soundPop();
  startStage(0);
};
// The three former top buttons (ボールを戻す／ステージをやり直す／カメラ切替)
// keep their ids and handlers above; they now live in the ☰ dropdown.
const menuBtn=document.getElementById('menuBtn'), menuPanel=document.getElementById('menuPanel');
menuBtn.addEventListener('click',function(e){ e.stopPropagation(); menuPanel.classList.toggle('open'); });
document.addEventListener('click',function(e){ if(menuPanel.classList.contains('open') && !menuPanel.contains(e.target)) menuPanel.classList.remove('open'); });
['resetBallBtn','retryBtn','cameraBtn'].forEach(function(id){ document.getElementById(id).addEventListener('click',function(){ menuPanel.classList.remove('open'); }); });

// ---------- Loop ----------
const clock=new THREE.Clock();
function animate(){
  requestAnimationFrame(animate);
  const dt=Math.min(clock.getDelta(),0.05);
  world.step(1/60, dt, 3);
  // bombs whose fuse was lit by a hard impact during the step go off now,
  // safely outside the physics callbacks
  targets.forEach(function(t){ if(t.detonate && !t.gone) explodeBomb(t); });
  if(ballMesh&&ballBody){ ballMesh.position.copy(ballBody.position); ballMesh.quaternion.copy(ballBody.quaternion); }
  // ball hits the sea -> big splash and it vanishes (only after launch; at rest before a throw it floats on its stand)
  if(ballBody&&ballMesh&&!ballGone&&(state==='flying'||state==='settling')&&ballBody.position.y<0.48&&ballBody.velocity.y<-0.3) destroyBall();
  // targets: sync + fallen-off-raft check (down at water level -> splash, vanish + score)
  targets.forEach(function(t){ if(t.gone) return; t.mesh.position.copy(t.body.position); t.mesh.quaternion.copy(t.body.quaternion); const sinkY=t.kind==='plank'?0.22 : t.kind==='can'?0.32 : 0.42; if(t.body.position.y < sinkY) destroyTarget(t); });
  // bursts
  for(let i=bursts.length-1;i>=0;i--){ const b=bursts[i]; b.life-=dt; b.vel.y-=9.8*dt; b.mesh.position.addScaledVector(b.vel,dt); b.mesh.material.opacity=Math.max(0,b.life/0.6); b.mesh.rotation.x+=dt*6; if(b.life<=0){ scene.remove(b.mesh); bursts.splice(i,1); } }
  // explosion flashes: a fast-expanding fireball that fades out
  for(let i=explosions.length-1;i>=0;i--){ const x=explosions[i]; x.life-=dt; const k=1-Math.max(0,x.life)/x.maxLife; x.mesh.scale.setScalar(1+k*(x.core?3:6.5)); x.mesh.material.opacity=(x.core?1:0.9)*(1-k); if(x.life<=0){ scene.remove(x.mesh); explosions.splice(i,1); } }
  // splash rings + drifting sea & clouds
  for(let i=splashRings.length-1;i>=0;i--){ const s=splashRings[i]; s.life-=dt; const k=1-Math.max(0,s.life)/s.maxLife; s.mesh.scale.setScalar(s.base+k*s.grow); s.mesh.material.opacity=0.9*(1-k); if(s.life<=0){ scene.remove(s.mesh); splashRings.splice(i,1); } }
  // water columns: shoot up fast, then collapse back into the sea
  for(let i=waterColumns.length-1;i>=0;i--){ const c=waterColumns[i]; c.life-=dt; const t=1-Math.max(0,c.life)/c.maxLife; const grow=t<0.28? t/0.28 : Math.max(0,1-(t-0.28)/0.72); if(c.isCap){ c.mesh.position.y=0.06+c.height*grow; c.mesh.scale.setScalar(Math.max(0.05,(1-t*0.5))); c.mesh.scale.y=0.55*Math.max(0.05,grow); } else { c.mesh.scale.y=Math.max(0.02,c.height*grow); c.mesh.position.y=c.mesh.scale.y/2; c.mesh.scale.x=c.mesh.scale.z=Math.max(0.25,1-t*0.55); } c.mesh.material.opacity=(c.isCap?0.85:0.78)*(1-t*0.85); if(c.life<=0){ scene.remove(c.mesh); waterColumns.splice(i,1); } }
  // splash droplets: ballistic spray that falls back to the water
  for(let i=splashDrops.length-1;i>=0;i--){ const d=splashDrops[i]; d.life-=dt; d.vel.y-=9.8*dt; d.mesh.position.addScaledVector(d.vel,dt); d.mesh.material.opacity=Math.max(0,Math.min(0.95,d.life/d.maxLife)); if(d.life<=0||d.mesh.position.y<0.0){ scene.remove(d.mesh); splashDrops.splice(i,1); } }
  if(waterUniforms){ waterUniforms.time.value=clock.elapsedTime; }
  if(waterTex){ waterTex.offset.x+=dt*0.008; waterTex.offset.y+=dt*0.014; }
  clouds.forEach(function(c,i){ c.position.x+=dt*(0.14+(i%3)*0.05); if(c.position.x>26) c.position.x=-26; });

  // smooth orbit: ease the turn velocity toward the held direction (0 when
  // nothing is held) and integrate the angle; placeLauncher moves the ball
  // and stand, and the camera delta below carries the camera along at the
  // exact same speed
  let wantDir=keyDir;
  heldDirs.forEach(function(d){ wantDir+=d; });
  wantDir=Math.max(-1,Math.min(1,wantDir));
  const canRotate=(state==='aiming'||state==='intro');
  rotVel += ((canRotate?wantDir*ROT_SPEED:0)-rotVel)*Math.min(1,dt*9);
  if(canRotate && Math.abs(rotVel)>0.0005){
    const prevAngle=angleOffset;
    angleOffset=Math.max(-ANGLE_MAX, Math.min(ANGLE_MAX, angleOffset + rotVel*dt));
    if(angleOffset!==prevAngle){
      placeLauncher();
      if(state==='aiming'&&!dragStart){ setPowerUI(0, angleOffset*57.3); showAimPreview(); }
    } else { rotVel=0; } // pressed against the ±90° end stop
  }

  // how far the launcher travelled along its orbit since the last frame
  const curLauncherPos=launcherPos();
  const orbitDelta=curLauncherPos.clone().sub(prevLauncherPos);
  prevLauncherPos.copy(curLauncherPos);

  if(state==='title'){
    // title screen: slow scenic orbit around the stage behind the logo
    const tt=clock.elapsedTime*0.09;
    camera.position.set(stageCenter.x+Math.sin(tt)*10.5, 4.3, stageCenter.z+Math.cos(tt)*10.5);
    camera.lookAt(stageCenter.x, 1.5, stageCenter.z);
  } else if(state==='intro'){
    // hold the close-up fixed for ~1s, then ease back to the play camera; input unlocks at 'aiming'
    introT+=dt;
    if(introT<=INTRO_HOLD){
      camera.position.copy(INTRO_POS); camera.lookAt(INTRO_LOOK);
    } else {
      const k=Math.min(1,(introT-INTRO_HOLD)/INTRO_PULL); const e=k*k*(3-2*k);
      camera.position.lerpVectors(INTRO_POS, camBasePos(), e);
      camera.lookAt(INTRO_LOOK.clone().lerp(lookTarget(), e));
      if(k>=1){
        state='aiming'; introDone=true;
        els.hintText.innerHTML=t('hintAim',{n:stageIndex+1,name:stageName(stageIndex),balls:ballsLeft,targets:totalTargets});
      }
    }
  } else if(camMode===0){
    // play camera: rides behind the orbiting launcher while aiming; once the
    // ball is launched it flies after the ball, trailing behind and above it
    // along the shot direction, then glides back to the launcher when the
    // throw settles
    if(state==='flying'&&ballMesh){
      const bp=ballMesh.position;
      const desired=new THREE.Vector3(bp.x-chaseDir.x*5.4, Math.max(1.5,bp.y+2.1), bp.z-chaseDir.z*5.4);
      camera.position.lerp(desired,0.11);
      const lv=ballBody?ballBody.velocity:null;
      camera.lookAt(bp.x+(lv?lv.x*0.06:0), Math.max(0.4,bp.y-0.1), bp.z+(lv?lv.z*0.06:0));
    }
    else { camera.position.add(orbitDelta); camera.position.lerp(camBasePos(),0.03); camera.lookAt(lookTarget()); }
  } else if(camMode===2 && state==='flying' && ballMesh){ camera.position.lerp(new THREE.Vector3(ballMesh.position.x,7.5,ballMesh.position.z+7),0.06); camera.lookAt(ballMesh.position); }

  if(state==='flying'){
    const elapsed=performance.now()-launchTime;
    const speed=ballBody.velocity.length();
    const dxo=ballBody.position.x-stageCenter.x, dzo=ballBody.position.z-stageCenter.z;
    const out = ballBody.position.y < -2 || (dxo*dxo+dzo*dzo)>420;
    const slow = elapsed>1600 && speed<0.7;
    if(out || slow || elapsed>5500){ state='settling'; settleTime=0; }
  } else if(state==='settling'){
    settleTime+=dt;
    const calm = targets.every(function(t){ return t.gone || t.body.velocity.length()<0.6; });
    if((calm && settleTime>0.5) || settleTime>3.5){ evaluateThrow(); }
  }
  // ball-side power gauge: pinned next to the ball on screen while aiming
  if(ballMesh && state==='aiming'){
    els.bgGauge.classList.add('show');
    const v=ballMesh.position.clone().project(camera);
    const sx=(v.x*0.5+0.5)*innerWidth, sy=(-v.y*0.5+0.5)*innerHeight;
    const gx=Math.max(4, Math.min(innerWidth-26, sx-72));
    const gy=Math.max(64, Math.min(innerHeight-118, sy-56));
    els.bgGauge.style.transform='translate('+gx+'px,'+gy+'px)';
  } else { els.bgGauge.classList.remove('show'); els.bgGauge.classList.remove('dragging'); }
  els.anglePad.classList.toggle('off', state!=='aiming'&&state!=='intro');
  // the hint bar only appears during the stage-start intro; once the player
  // can aim (and for the whole throw) it stays hidden, every stage alike
  els.hintBar.classList.toggle('show', state==='intro');
  renderer.render(scene,camera);
}
startStage(0,true);
applyLang(LANG);
animate();
window.addEventListener('resize',function(){ camera.aspect=innerWidth/innerHeight; camera.updateProjectionMatrix(); renderer.setSize(innerWidth,innerHeight); });
