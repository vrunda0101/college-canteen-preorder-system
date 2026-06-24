/* ── Addon data ── */
const ADDON_SETS = {
  spice_south:[{icon:"🌿",name:"No Spice",price:0},{icon:"🌶️",name:"Mild",price:0},{icon:"🌶️🌶️",name:"Medium",price:0},{icon:"🔥",name:"Extra Spicy",price:0}],
  spice_north:[{icon:"🌿",name:"No Spice",price:0},{icon:"🌶️",name:"Mild",price:0},{icon:"🌶️🌶️",name:"Medium",price:0},{icon:"🔥",name:"Extra Spicy",price:0},{icon:"💀",name:"Deadly Hot",price:0}],
  spice_chinese:[{icon:"🌿",name:"No Spice",price:0},{icon:"🌶️",name:"Mild",price:0},{icon:"🌶️🌶️",name:"Spicy",price:0},{icon:"🔥",name:"Extra Spicy",price:0}],
  spice_cafe:[{icon:"🌿",name:"No Spice",price:0},{icon:"🌶️",name:"Mild",price:0},{icon:"🌶️🌶️",name:"Spicy",price:0}],
  cheese:[{icon:"🧀",name:"Extra Cheese",price:20},{icon:"🫕",name:"Cheese Sauce",price:15},{icon:"🧈",name:"Butter",price:10}],
  toppings_cafe:[{icon:"🥑",name:"Avocado",price:20},{icon:"🍄",name:"Mushrooms",price:15},{icon:"🫑",name:"Bell Peppers",price:10},{icon:"🧅",name:"Caramelised Onion",price:10},{icon:"🥓",name:"Bacon Strips",price:30},{icon:"🌽",name:"Sweet Corn",price:10},{icon:"🍍",name:"Pineapple",price:10},{icon:"🥚",name:"Fried Egg",price:15}],
  sauce_cafe:[{icon:"🍅",name:"Extra Tomato Sauce",price:5},{icon:"🫙",name:"Mayo",price:5},{icon:"🌿",name:"Pesto Drizzle",price:10},{icon:"🧄",name:"Garlic Aioli",price:10},{icon:"🥬",name:"Mint Chutney",price:5},{icon:"🌶️",name:"Hot Sauce",price:5}],
  sauce_chinese:[{icon:"🌶️",name:"Extra Chilli Sauce",price:5},{icon:"🧄",name:"Garlic Sauce",price:5},{icon:"🍯",name:"Sweet & Sour",price:5},{icon:"🌿",name:"Light Soy",price:5}],
  sauce_south:[{icon:"🥥",name:"Extra Coconut Chutney",price:5},{icon:"🍅",name:"Extra Tomato Chutney",price:5},{icon:"🌿",name:"Extra Sambar",price:10},{icon:"🧈",name:"Extra Ghee",price:10}],
  sauce_north:[{icon:"🍅",name:"Extra Gravy",price:10},{icon:"🧈",name:"Extra Butter/Ghee",price:10},{icon:"🥛",name:"Malai (Cream)",price:15},{icon:"🌿",name:"Mint Chutney",price:5}],
  coffee_extras:[{icon:"🍫",name:"Extra Espresso Shot",price:20},{icon:"🍦",name:"Whipped Cream",price:15},{icon:"🍬",name:"Caramel Syrup",price:10},{icon:"🍫",name:"Chocolate Syrup",price:10},{icon:"🥛",name:"Oat Milk",price:20},{icon:"🧊",name:"Extra Ice",price:0}],
  sweetness:[{icon:"🚫",name:"No Sugar",price:0},{icon:"🍬",name:"Less Sweet",price:0},{icon:"✅",name:"Normal",price:0},{icon:"🍭",name:"Extra Sweet",price:0}],
  juice_extras:[{icon:"🍯",name:"Honey",price:10},{icon:"🌿",name:"Mint Leaves",price:5},{icon:"🧂",name:"Black Salt",price:0},{icon:"🍋",name:"Extra Lemon",price:5},{icon:"🫚",name:"Chia Seeds",price:15},{icon:"🥛",name:"Milk Based",price:10}],
  beverage_extras:[{icon:"🍫",name:"Extra Chocolate",price:10},{icon:"🍦",name:"Whipped Cream",price:15},{icon:"🧁",name:"Sprinkles",price:5},{icon:"🧊",name:"Less Ice",price:0},{icon:"🍓",name:"Strawberry Syrup",price:10}],
  rice_extras:[{icon:"🥚",name:"Extra Egg",price:20},{icon:"🍗",name:"Extra Chicken",price:30},{icon:"🧅",name:"Fried Onion",price:5},{icon:"🧈",name:"Extra Ghee",price:10},{icon:"🥒",name:"Raita",price:15}],
  sides:[{icon:"🥗",name:"Side Salad",price:20},{icon:"🧅",name:"Onion Rings",price:25},{icon:"🍟",name:"French Fries",price:30},{icon:"🥤",name:"Cold Drink",price:25}],
};
const SECTION_LABELS={cheese:"Dairy & Cheese",toppings_cafe:"Toppings",sauce_cafe:"Sauces",sauce_chinese:"Sauces",sauce_south:"Chutneys & Extras",sauce_north:"Extras",coffee_extras:"Coffee Extras",sweetness:"Sweetness",juice_extras:"Add-ons",beverage_extras:"Shake Add-ons",rice_extras:"Rice Extras",sides:"Add a Side"};
const SECTION_ICONS={cheese:"🧀",toppings_cafe:"🥗",sauce_cafe:"🫙",sauce_chinese:"🌶️",sauce_south:"🥥",sauce_north:"🥄",coffee_extras:"☕",sweetness:"🍬",juice_extras:"🌿",beverage_extras:"✨",rice_extras:"🍚",sides:"🍟"};

const stalls=[
  {id:0,icon:"🌴",name:"South Indian",sub:"Udupi style · Veg",tag:"Veg",tagColor:"#1a3d2e",tagBorder:"#2d6045",items:[
    {name:"Masala Dosa",price:40,spice:"spice_south",addons:["cheese","sauce_south"]},
    {name:"Idli Sambar (2 pcs)",price:30,spice:"spice_south",addons:["sauce_south"]},
    {name:"Medu Vada",price:30,spice:"spice_south",addons:["sauce_south"]},
    {name:"Rava Uttapam",price:45,spice:"spice_south",addons:["cheese","sauce_south"]},
    {name:"Pongal",price:35,spice:"spice_south",addons:["sauce_south"]},
    {name:"Rava Dosa",price:45,spice:"spice_south",addons:["cheese","sauce_south"]},
    {name:"Set Dosa",price:40,spice:"spice_south",addons:["sauce_south"]},
    {name:"Filter Coffee",price:20,spice:null,addons:["sweetness","coffee_extras"]},
  ]},
  {id:1,icon:"🍛",name:"North Indian",sub:"Dhaba style · Veg + Non-Veg",tag:"Veg + Non-Veg",tagColor:"#3d1a0a",tagBorder:"#7a3010",items:[
    {name:"Dal Tadka + Rice",price:60,spice:"spice_north",addons:["sauce_north","rice_extras"]},
    {name:"Paneer Butter Masala",price:80,spice:"spice_north",addons:["cheese","sauce_north"]},
    {name:"Rajma Chawal",price:60,spice:"spice_north",addons:["sauce_north","rice_extras"]},
    {name:"Chole Bhature",price:50,spice:"spice_north",addons:["sauce_north"]},
    {name:"Roti + Sabzi",price:40,spice:"spice_north",addons:["sauce_north"]},
    {name:"Chicken Curry + Rice",price:90,spice:"spice_north",addons:["sauce_north","rice_extras"]},
    {name:"Veg Biryani",price:70,spice:"spice_north",addons:["sauce_north","rice_extras"]},
    {name:"Chicken Biryani",price:90,spice:"spice_north",addons:["sauce_north","rice_extras"]},
  ]},
  {id:2,icon:"☕",name:"Coffee Corner",sub:"Brews & bakes",tag:"Hot & Cold",tagColor:"#3d2a10",tagBorder:"#7a500a",items:[
    {name:"Espresso",price:30,spice:null,addons:["sweetness","coffee_extras"]},
    {name:"Cappuccino",price:40,spice:null,addons:["sweetness","coffee_extras"]},
    {name:"Cold Coffee",price:50,spice:null,addons:["sweetness","coffee_extras"]},
    {name:"Latte",price:45,spice:null,addons:["sweetness","coffee_extras"]},
    {name:"Mocha",price:50,spice:null,addons:["sweetness","coffee_extras"]},
    {name:"Americano",price:35,spice:null,addons:["sweetness","coffee_extras"]},
    {name:"Caramel Frappe",price:65,spice:null,addons:["sweetness","coffee_extras"]},
    {name:"Masala Chai",price:20,spice:null,addons:["sweetness"]},
  ]},
  {id:3,icon:"🥡",name:"Chinese",sub:"Indo-Chinese fusion",tag:"Veg + Non-Veg",tagColor:"#0a1e3d",tagBorder:"#10407a",items:[
    {name:"Veg Fried Rice",price:60,spice:"spice_chinese",addons:["sauce_chinese","rice_extras"]},
    {name:"Chicken Fried Rice",price:80,spice:"spice_chinese",addons:["sauce_chinese","rice_extras"]},
    {name:"Veg Hakka Noodles",price:55,spice:"spice_chinese",addons:["sauce_chinese"]},
    {name:"Chicken Chowmein",price:70,spice:"spice_chinese",addons:["sauce_chinese"]},
    {name:"Veg Manchurian",price:70,spice:"spice_chinese",addons:["sauce_chinese"]},
    {name:"Spring Rolls (2 pcs)",price:50,spice:"spice_chinese",addons:["sauce_chinese"]},
    {name:"Sweet & Sour Veg",price:80,spice:"spice_chinese",addons:["sauce_chinese"]},
    {name:"Hot & Sour Soup",price:45,spice:"spice_chinese",addons:["sauce_chinese"]},
  ]},
  {id:4,icon:"🥤",name:"Beverages",sub:"Shakes & cold drinks",tag:"Cold",tagColor:"#1a0e3d",tagBorder:"#3d2090",items:[
    {name:"Chocolate Milkshake",price:70,spice:null,addons:["sweetness","beverage_extras"]},
    {name:"Vanilla Shake",price:60,spice:null,addons:["sweetness","beverage_extras"]},
    {name:"Strawberry Shake",price:65,spice:null,addons:["sweetness","beverage_extras"]},
    {name:"Buttermilk (Chaas)",price:20,spice:"spice_south",addons:[]},
    {name:"Nimbu Pani",price:20,spice:null,addons:["sweetness","juice_extras"]},
    {name:"Cold Drink (can)",price:30,spice:null,addons:[]},
    {name:"Badam Milk",price:50,spice:null,addons:["sweetness"]},
    {name:"Iced Tea",price:35,spice:null,addons:["sweetness"]},
  ]},
  {id:5,icon:"🍊",name:"Juice Bar",sub:"Fresh & 100% natural",tag:"Fresh",tagColor:"#0e2b06",tagBorder:"#1e6010",items:[
    {name:"Orange Juice",price:40,spice:null,addons:["sweetness","juice_extras"]},
    {name:"Watermelon Juice",price:35,spice:null,addons:["sweetness","juice_extras"]},
    {name:"Sugarcane Juice",price:25,spice:null,addons:["sweetness","juice_extras"]},
    {name:"Mixed Fruit Juice",price:50,spice:null,addons:["sweetness","juice_extras"]},
    {name:"Pomegranate Juice",price:60,spice:null,addons:["sweetness","juice_extras"]},
    {name:"Mango Juice",price:45,spice:null,addons:["sweetness","juice_extras"]},
    {name:"Green Detox",price:55,spice:null,addons:["sweetness","juice_extras"]},
    {name:"Coconut Water",price:30,spice:null,addons:[]},
  ]},
  {id:6,icon:"🍕",name:"Café Corner",sub:"Pizza, burgers & more",tag:"Veg + Non-Veg",tagColor:"#3d0a0a",tagBorder:"#7a1010",items:[
    {name:"Margherita Pizza",price:120,spice:"spice_cafe",addons:["cheese","toppings_cafe","sauce_cafe","sides"]},
    {name:"Veg Burger",price:70,spice:"spice_cafe",addons:["cheese","toppings_cafe","sauce_cafe","sides"]},
    {name:"Chicken Burger",price:90,spice:"spice_cafe",addons:["cheese","toppings_cafe","sauce_cafe","sides"]},
    {name:"Pasta Arrabbiata",price:90,spice:"spice_cafe",addons:["cheese","sauce_cafe"]},
    {name:"Club Sandwich",price:80,spice:"spice_cafe",addons:["cheese","toppings_cafe","sauce_cafe"]},
    {name:"French Fries",price:50,spice:"spice_cafe",addons:["cheese","sauce_cafe"]},
    {name:"Panini",price:85,spice:"spice_cafe",addons:["cheese","toppings_cafe","sauce_cafe"]},
    {name:"Garlic Bread",price:55,spice:null,addons:["cheese"]},
  ]},
];

let activeStall=0, cart=[], custCtx=null, custSelections={spice:null,addons:{}};

/* ── Tabs & Menu ── */
function renderTabs(){
  document.getElementById('stallTabs').innerHTML=stalls.map(s=>`
    <div class="tab ${s.id===activeStall?'active':''}" onclick="switchStall(${s.id})">
      <span class="tab-icon">${s.icon}</span><span class="tab-name">${s.name}</span>
    </div>`).join('');
}
function renderMenu(){
  const s=stalls[activeStall];
  const addonPreview=i=>{
    if(!i.addons.length&&!i.spice) return '';
    const t=[];
    if(i.spice) t.push('Spice level');
    if(i.addons.includes('cheese')) t.push('Cheese');
    if(i.addons.includes('toppings_cafe')) t.push('Toppings');
    if(i.addons.some(k=>k.startsWith('sauce'))) t.push('Sauces');
    if(i.addons.includes('sweetness')) t.push('Sweetness');
    if(i.addons.includes('sides')) t.push('Add sides');
    return t.slice(0,3).map(x=>`<span class="mini-tag">${x}</span>`).join('');
  };
  document.getElementById('mainContent').innerHTML=`
    <div class="stall-header">
      <div class="stall-title"><span>${s.icon}</span>${s.name}</div>
      <div class="stall-desc">${s.sub}</div>
      <span class="stall-tag" style="background:${s.tagColor};border-color:${s.tagBorder};color:#ccc">${s.tag}</span>
    </div>
    <div class="menu-grid">
      ${s.items.map((item,i)=>`
        <div class="menu-card">
          <div class="menu-card-name">${item.name}</div>
          <div class="menu-card-tags">${addonPreview(item)}</div>
          <div class="menu-card-bottom">
            <span class="menu-card-price">₹${item.price}</span>
            <button class="add-btn" onclick="openCust(${s.id},${i})">Customise +</button>
          </div>
        </div>`).join('')}
    </div>`;
}
function switchStall(id){activeStall=id;renderTabs();renderMenu();}

/* ── Customise ── */
function openCust(stallId,itemIdx){
  const s=stalls.find(s=>s.id===stallId), item=s.items[itemIdx];
  custCtx={stallId,itemIdx,stallName:s.name,basePrice:item.price,spiceKey:item.spice,addonKeys:item.addons};
  custSelections={spice:item.spice?ADDON_SETS[item.spice][1]?.name:null,addons:{}};
  document.getElementById('custName').textContent=item.name;
  document.getElementById('custStall').textContent=s.icon+' '+s.name;
  renderCustBody();
  document.getElementById('custOverlay').classList.add('open');
}
function closeCust(){document.getElementById('custOverlay').classList.remove('open');custCtx=null;}
function renderCustBody(){
  if(!custCtx) return;
  const {spiceKey,addonKeys}=custCtx;
  let html='';
  if(spiceKey){
    html+=`<div class="cust-section"><div class="cust-section-title"><span>🌶️</span>Spice Level</div>
      <div class="spice-row">${ADDON_SETS[spiceKey].map(o=>`
        <button class="spice-btn ${custSelections.spice===o.name?'sel':''}" onclick="selectSpice('${o.name.replace(/'/g,"\\'")}')">
          ${o.icon} ${o.name}</button>`).join('')}</div></div>`;
  }
  addonKeys.forEach(key=>{
    const opts=ADDON_SETS[key]; if(!opts?.length) return;
    html+=`<div class="cust-section"><div class="cust-section-title"><span>${SECTION_ICONS[key]||'✨'}</span>${SECTION_LABELS[key]||key}</div>
      <div class="addon-grid">${opts.map((o,oi)=>{
        const akey=key+'_'+oi, sel=!!custSelections.addons[akey];
        return `<div class="addon-chip ${sel?'sel':''}" onclick="toggleAddon('${key}',${oi})">
          <div class="addon-chip-left"><span class="addon-chip-icon">${o.icon}</span>
            <div><div class="addon-chip-name">${o.name}</div>
            <div class="addon-chip-price" ${o.price===0?'style="color:var(--muted)"':''}>${o.price>0?'+₹'+o.price:'Free'}</div></div>
          </div><div class="addon-check">${sel?'✓':''}</div></div>`;
      }).join('')}</div></div>`;
  });
  html+=`<div class="cust-section"><div class="cust-section-title"><span>📝</span>Special Note</div>
    <textarea class="note-box" id="custNote" rows="2" placeholder="e.g. No onion, extra crispy, less oil..."></textarea></div>`;
  document.getElementById('custBody').innerHTML=html;
  updateCustTotal();
}
function selectSpice(name){custSelections.spice=name;renderCustBody();}
function toggleAddon(key,oi){const akey=key+'_'+oi;custSelections.addons[akey]=!custSelections.addons[akey];renderCustBody();}
function updateCustTotal(){
  if(!custCtx) return;
  let total=custCtx.basePrice;
  Object.entries(custSelections.addons).forEach(([akey,sel])=>{
    if(!sel) return;
    const parts=akey.split('_'), oi=parseInt(parts.pop()), key=parts.join('_');
    const o=(ADDON_SETS[key]||[])[oi]; if(o) total+=o.price;
  });
  document.getElementById('custTotalVal').textContent='₹'+total;
}
function confirmAdd(){
  if(!custCtx) return;
  const note=document.getElementById('custNote')?.value.trim()||'';
  let addonTotal=0; const modLabels=[];
  if(custSelections.spice) modLabels.push(custSelections.spice);
  Object.entries(custSelections.addons).forEach(([akey,sel])=>{
    if(!sel) return;
    const parts=akey.split('_'), oi=parseInt(parts.pop()), key=parts.join('_');
    const o=(ADDON_SETS[key]||[])[oi]; if(o){addonTotal+=o.price;modLabels.push(o.name);}
  });
  if(note) modLabels.push(`"${note}"`);
  const s=stalls.find(s=>s.id===custCtx.stallId), item=s.items[custCtx.itemIdx];
  cart.push({key:Date.now()+'_'+Math.random(),name:item.name,stall:s.name,stallIcon:s.icon,
    basePrice:item.price,addonTotal,totalPrice:item.price+addonTotal,qty:1,mods:modLabels});
  updateCartBar(); closeCust(); showToast('Added to cart! 🛒');
}

/* ── Toast ── */
function showToast(msg){
  const t=document.createElement('div');
  t.textContent=msg;
  Object.assign(t.style,{position:'fixed',bottom:'6rem',left:'50%',transform:'translateX(-50%)',
    background:'#222',color:'#f0ece4',padding:'10px 20px',borderRadius:'30px',
    fontSize:'13px',zIndex:'500',boxShadow:'0 4px 20px rgba(0,0,0,0.5)',
    border:'1px solid rgba(255,255,255,0.1)',transition:'opacity 0.4s',opacity:'1',whiteSpace:'nowrap'});
  document.body.appendChild(t);
  setTimeout(()=>{t.style.opacity='0';setTimeout(()=>t.remove(),400);},1500);
}

/* ── Cart bar ── */
function updateCartBar(){
  const count=cart.reduce((s,i)=>s+i.qty,0), total=cart.reduce((s,i)=>s+i.totalPrice*i.qty,0);
  document.getElementById('cartCount').textContent=count;
  document.getElementById('cartTotal').textContent='₹'+total;
  document.getElementById('cartBar').classList.toggle('visible',count>0);
}

/* ── Order sheet ── */
function openOrder(){document.getElementById('overlay').classList.add('open');renderOrder();}
function closeOrder(){document.getElementById('overlay').classList.remove('open');}
function renderOrder(){
  const c=document.getElementById('orderItems');
  if(!cart.length){c.innerHTML='<div class="empty-cart">🛒 Cart khaali hai</div>';return;}
  const total=cart.reduce((s,i)=>s+i.totalPrice*i.qty,0);
  c.innerHTML=cart.map((item,idx)=>`
    <div class="order-item">
      <div class="order-item-top">
        <div>
          <div class="order-item-name">${item.name}</div>
          <div class="order-item-stall">${item.stallIcon} ${item.stall}</div>
          ${item.mods.length?`<div class="order-item-mods">${item.mods.join(' · ')}</div>`:''}
        </div>
        <div class="order-item-right">
          <div class="qty-ctrl">
            <button class="qty-btn" onclick="changeQty(${idx},-1)">−</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" onclick="changeQty(${idx},1)">+</button>
          </div>
          <div class="order-item-price">₹${item.totalPrice*item.qty}</div>
        </div>
      </div>
    </div>`).join('')+
  `<div class="order-total-row"><span>Total</span><span style="color:var(--accent)">₹${total}</span></div>
   <button class="proceed-pay-btn" onclick="openPayment()"><span>💳</span> Proceed to Pay ₹${total}</button>`;
}
function changeQty(idx,delta){
  cart[idx].qty+=delta; if(cart[idx].qty<=0) cart.splice(idx,1);
  updateCartBar(); renderOrder();
}

/* ── Payment ── */
let currentPayMethod='upi';

function openPayment(){
  const total=cart.reduce((s,i)=>s+i.totalPrice*i.qty,0);
  document.getElementById('payAmountBadge').textContent='₹'+total;
  document.getElementById('cashTotal').textContent='₹'+total;
  ['upiPayAmt','cardPayAmt','nbPayAmt'].forEach(id=>{
    const el=document.getElementById(id); if(el) el.textContent='₹'+total;
  });
  // reset views
  document.getElementById('payMainView').style.display='block';
  document.getElementById('processingView').classList.remove('show');
  document.getElementById('successView').classList.remove('show');
  switchPayMethod('upi');
  closeOrder();
  document.getElementById('payOverlay').classList.add('open');
}
function closePayment(){document.getElementById('payOverlay').classList.remove('open');}

function switchPayMethod(method){
  currentPayMethod=method;
  ['upi','card','netbanking','cash'].forEach(m=>{
    document.getElementById('pm-'+m).classList.toggle('active',m===method);
    document.getElementById('panel-'+m).classList.toggle('active',m===method);
  });
}

function selectUpiApp(el,app){
  document.querySelectorAll('.upi-app').forEach(a=>a.classList.remove('sel'));
  el.classList.add('sel');
}
function verifyUpi(){
  const val=document.getElementById('upiIdInput').value.trim();
  if(!val){showToast('UPI ID enter karo!');return;}
  showToast('✅ UPI ID verified!');
}
function selectCardBrand(el){
  document.querySelectorAll('.card-brand').forEach(b=>b.classList.remove('sel'));
  el.classList.add('sel');
}
function selectBank(el){
  document.querySelectorAll('.bank-btn').forEach(b=>b.classList.remove('sel'));
  el.classList.add('sel');
}
function formatCard(el){
  let v=el.value.replace(/\D/g,'').substring(0,16);
  el.value=v.replace(/(.{4})/g,'$1  ').trim();
}
function formatExpiry(el){
  let v=el.value.replace(/\D/g,'');
  if(v.length>=2) v=v.substring(0,2)+' / '+v.substring(2,4);
  el.value=v;
}

function processPayment(method){
  const total=cart.reduce((s,i)=>s+i.totalPrice*i.qty,0);
  const isCash=method==='Cash';

  document.getElementById('payMainView').style.display='none';
  document.getElementById('processingView').classList.add('show');
  document.getElementById('processingText').textContent=
    isCash?'Confirming your order…':'Processing payment…';

  setTimeout(()=>{
    document.getElementById('processingView').classList.remove('show');
    showSuccess(method, total);
  }, isCash?1200:2200);
}

function showSuccess(method, total){
  const token=String(Math.floor(Math.random()*89)+10); // 2-digit token
  const orderId='CC'+Date.now().toString().slice(-6);
  const now=new Date().toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit'});

  document.getElementById('tokenNumber').textContent='#'+token;
  document.getElementById('successSub').textContent=
    method==='Cash'
      ? 'Order confirmed! Pay ₹'+total+' at the cashier counter.'
      : '₹'+total+' paid via '+method+'. Show token at counter.';

  const items=cart.map(i=>`<div class="receipt-row"><span class="label">${i.name} ×${i.qty}</span><span class="val">₹${i.totalPrice*i.qty}</span></div>`).join('');
  document.getElementById('receiptRows').innerHTML=
    items+
    `<div class="receipt-row"><span class="label">Payment</span><span class="val green">${method==='Cash'?'Cash on Counter':method+' ✓'}</span></div>`+
    `<div class="receipt-row"><span class="label">Order ID</span><span class="val" style="font-size:11px">${orderId}</span></div>`+
    `<div class="receipt-row"><span class="label">Time</span><span class="val">${now}</span></div>`;

  document.getElementById('successView').classList.add('show');
  cart=[]; updateCartBar();
}

function closeDone(){
  document.getElementById('payOverlay').classList.remove('open');
  closeOrder();
}

/* ── Init ── */
renderTabs();
renderMenu();