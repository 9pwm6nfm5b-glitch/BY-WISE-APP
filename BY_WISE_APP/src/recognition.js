const HIGH_CONFIDENCE = [
  ['Pets', /^(cat|kitten|dog|puppy|rabbit|bunny|bird|hamster|guinea pig|turtle|tortoise|乌龟|龟|猫|狗|兔|鸟|仓鼠)$/i],
  ['Dining', /^(fish|salmon|tuna|sardine|mackerel|cod|seabass|鱼|三文鱼|金枪鱼)$/i],
  ['Pets', /(fish\s*food|fish\s*pellets?|fish\s*tank|fish\s*filter|aquarium|鱼粮|鱼缸|鱼\s*过滤|猫粮|狗粮|cat\s*food|dog\s*food)/i],
  ['Automobile', /\b(bmw|audi|toyota|proton|perodua|volkswagen|mercedes|benz|honda|nissan|mazda|subaru|suzuki|porsche|ferrari|lamborghini|tesla|byd)\b/i],
  ['Automobile', /\b(yamaha|kawasaki|ducati|ktm|triumph|harley[- ]davidson|vespa)\b/i],
  ['Electronics & Camera', /\b(nikon|fujifilm|fuji|canon|sony|lumix|olympus|ricoh|pentax|sigma|tamron|leica|hasselblad|gopro|dji|iphone|ipad|macbook|imac|samsung|galaxy|airpods|playstation|ps5|xbox|nintendo|switch|steam deck)\b/i],
  ['Luxury Goods', /\b(rolex|seiko|casio|hublot|patek|omega|cartier|audemars piguet|\bap\b|gucci|prada|chanel|hermes|dior|louis vuitton|\blv\b)\b/i],
  ['Household & Daily', /\b(toothbrush|toothpaste|shampoo|conditioner|body wash|soap|tissue|toilet paper|detergent|dish soap|cutlery|tableware|plate|bowl|spoon|fork|chopsticks|mug|cup|水杯|牙刷|牙膏|洗发水|沐浴露|纸巾|洗衣液|餐具|碗|盘子|勺子|叉子|筷子)\b/i],
  ['Medical & Health', /\b(vitamin|vitamin c|vitamin d|collagen|probiotic|calcium|magnesium|zinc|fish oil|blackmores|swisse|gnc|eu yan sang|medicine|medication|药品|维生素|胶原蛋白|保健品)\b/i],
  ['Finance & Investments', /\b(stock|stocks|share|shares|etf|fund|bond|bitcoin|crypto|moomoo|ibkr|syfe|stashaway|endowus|股票|基金|投资|汇率|换汇)\b/i],
  ['Bills', /\b(iras|cpf|hdb|lta|ica|mom|government|fine|penalty|summons|tax|insurance|sp services|singtel|starhub|m1|utility bill|账单|罚款|税)\b/i],
  ['Transport', /\b(parking|parking fee|carpark|erp|toll|ez-link|simplygo|grab|gojek|tada|ryde|mrt|bus|taxi|租车|停车|停车费)\b/i],
  ['Travel', /\b(flight|air ticket|airline|hotel|agoda|booking\.com|expedia|airbnb|attraction|ticket|theme park|游乐场|景点|门票|飞机票)\b/i],
  ['Education', /\b(word|excel|powerpoint|microsoft 365|tuition|school fee|course|学费)\b/i],
  ['Gifts', /\b(flower|flowers|bouquet|gift|present|鲜花|花束|礼物)\b/i],
  ['Digital Entertainment', /\b(game top up|game credit|steam|playstation|xbox|nintendo|netflix|spotify|youtube premium|disney\+|hbo|游戏充值)\b/i]
];

const SECONDARY = [
  ['Online Food Delivery', /grab\s*food|grabfood|foodpanda|deliveroo|pandamart|外卖|外送/i],
  ['Groceries', /fairprice|ntuc|sheng\s*siong|cold\s*storage|giant|mustafa|99\s*speedmart|aeon|jaya\s*grocer|village\s*grocer|mydin|econsave|supermarket|groceries|牛奶|鸡蛋|米|蔬菜|水果/i],
  ['Online Shopping', /shopee|lazada|tiktok\s*shop|taobao|1688|temu|amazon|zalora|shein|qoo10|carousell|pdd|拼多多|淘宝/i],
  ['Dining', /koufu|food\s*republic|malaysia\s*boleh|restaurant|cafe|kopitiam|hawker|kopi|coffee|tea|milk\s*tea|bubble\s*tea|beer|wine|whisky|bbq|barbecue|烤肉|烧烤|茶|咖啡|奶茶|酒|饭|面|粥|肉|鱼/i],
  ['Beauty & Wellness', /hair gel|hair wax|hairspray|shaver|razor|skincare|cosmetic|makeup|salon|spa|发胶|剃须刀|护肤|化妆/i],
  ['Clothing & Fashion', /uniqlo|zara|h&m|cotton on|love bonito|nike|adidas|under armour|new balance|asics|shirt|pants|jeans|dress|skirt|shoes|sneakers|slippers|underwear|bra|袜|衣服|裤子|鞋|帽子|背包|底裤|内裤/i],
  ['Home & Living', /best denki|courts|harvey norman|gain city|ikea|washing machine|dryer|microwave|water heater|kettle|air fryer|fridge|refrigerator|热水器|热水壶|洗衣机|微波炉|冰箱/i]
];

export function stripAmount(text){return String(text||'').replace(/(?:s\$|rm|\$)?\s*\d+(?:\.\d{1,2})?/gi,' ').replace(/\s+/g,' ').trim();}
export function recognize(text){
  const raw=stripAmount(text);
  if(!raw)return null;
  for(const [category,re] of HIGH_CONFIDENCE) if(re.test(raw)) return {category,confidence:'high'};
  for(const [category,re] of SECONDARY) if(re.test(raw)) return {category,confidence:'high'};
  return null;
}
