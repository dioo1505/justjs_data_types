🚀 JavaScript Ma'lumotlar Turlari - JustJS bilan
"Kodda ham real hayotdagidek - har narsa o'z turida bo'ladi!"

Assalomu aleykum, JavaScriptga qiziqqanlar!

Hayotimizda qanday turli-tuman narsalar bor - sonlar, so'zlar, ha/yo'q javoblar... Xuddi shunday JavaScript ham o'z "narsalari"ni categoriyalarga bo'lib saqlaydi. Mana shu loyihada bularni qiziqarli va tushunarli tarzda yoritishga harakat qildim.

🎯 Nega Bu Muhim?
Tasavvur qiling, siz do'konda savdo qilasiz:

Narx - bu son (Number) 💰
Mahsulot nomi - bu matn (String) 📝
Sotilganmi? - bu ha/yo'q (Boolean) ✅
Mijoz ma'lumoti - bu obyekt (Object) 👤
JavaScript ham xuddi shunday ishlaydi!

1. Primitive Types - Oddiy Turlar
Xuddi atom kabi - bo'linmas va sodda:

Number - 25, 99.99
Real hayot: Yoshingiz, pul miqdori, telefon raqam

String - "Salom", 'JavaScript'
Real hayot: Ismingiz, manzil, xabarlar

Boolean - true, false
Real hayot: Chiroq yonganmi? Eshik ochiqmi?

Undefined - let x;
Real hayot: Hali javob berilmagan savol

Null - let data = null
Real hayot: Bo'sh quti, hech narsa yo'q

Symbol - Symbol('id')
Real hayot: Pasport raqami - har biri noyob

📦 Object Types - Murakkab Turlar
Xuddi do'kon kabi - ichida ko'p narsa:

Object - {name: "Dio", age: 5}
Real hayot: Odamning ma'lumotlari

Array - [1, 2, 3, 4]
Real hayot: Ro'yxat, savatdagi mahsulotlar

Function - function hello() {}
Real hayot: Mashina - tugma bossangiz, yurishni boshlaydi

Date - new Date()
Real hayot: Kalendar, soat

Loyihada typeof operatorini sinab ko'rishingiz mumkin:

// Sinab ko'ring:
typeof 123          // "number"
typeof "salom"      // "string" 
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof null         // "object" (JavaScript ning xatosi! 😕)

📱 Qanday ishlatasiz?
Clone qiling:
bash
git clone https://github.com/dioo1505/justjs_data_types.git
cd justjs_data_types

bash
open index.html

💡 Real Hayot Misollari
E-commerce Sayt:
javascript
let product = {
    name: "iPhone 15",        // String
    price: 1200,              // Number  
    inStock: true,            // Boolean
    reviews: [],              // Array
    createdAt: new Date(),    // Date
    discount: null            // Null
};
Telegram Bot:
javascript
function sendMessage(chatId, text) {  // Function
    let messageId = Symbol('msg');    // Symbol
    // Xabar yuborish logikasi...
}

📚 Qo'shimcha Resurslar

MDN Web Docs - Rasmiy hujjatlar
JavaScript.info - Batafsil tushuntirish
WebForMySelf - O'zbek tilida darslar

🎉 Oxirgi So'z
JavaScript o'rganish - bu xuddi yangi til o'rganishga o'xshash. Qiyinroq tuyulishi mumkin, lekin sabr-toqat bilan hamma narsaga erishasiz!

Unutmang: Har bir katta dasturchi ham bir paytlar typeof ni yozib ko'rgan! 🌟

💻 Happy Coding!

Muallif: @dioo1505
Sana: 23.08.2025
Maqsad: JavaScript ni qiziqarli qilish! 🎯

