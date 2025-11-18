# TypeScript Interview Questions - Blog Task

### 1. What are some differences between interfaces and types in TypeScript?

সহজভাবে বলতে গেলে, interface আর type দুটোই object বা class-এর structure define করতে ব্যবহার করা হয়।  
তবে পার্থক্য হলো, interface একাধিকবার declare করলে merge হয়ে যায়, আর type একবার define করলে merge হয় না।  
Interface মূলত class বা object-এর shape define করার জন্য ।

---
### 2. What is the use of the keyof keyword in TypeScript? Provide an example?

keyof  ব্যবহার করা হয় কোনো object type-এর সব key বের করার জন্য। এটি code কে type-safe রাখে এবং ভুল key ব্যবহার করলে compile-time error দেয়।  

উদাহরণ: ধরুন আমাদের কাছে একজন ব্যক্তির object আছে, যার প্রোপার্টি হলো name, age এবং email। keyof ব্যবহার করলে আমরা শুধু এই তিনটি প্রোপার্টি access করতে পারব। যদি ভুল কোনো key ব্যবহার করি, TypeScript error দেখাবে।  

---
### 3. Explain the difference between any, unknown, and never types in TypeScript

any: ধরুন আপনি চাইলে variable যেকোনো type হতে পারে। কিন্তু যেহেতু TypeScript কিছু জানে না, তাই safety কমে যায়।  
 unknown: এটা অনেকটা safe any। যেকোনো type হতে পারে, কিন্তু কিছু use করার আগে অবশ্যই type check করতে হবে।  
 never: এই type এমন কোনো value return করে না। উদাহরণস্বরূপ, এমন একটি function যা error throw করে বা কখনো শেষ হয় না।  

---

### 4. What is the use of enums in TypeScript? Provide an example of a numeric and string enum

Enums ব্যবহার করা হয় value group করার জন্য, যেমন কোনো state, option বা constant set।  
Numeric enum এর উদাহরণ:** ধরুন, আমরা কোনো অর্ডারের স্টেট define করতে চাই: Pending = 0, Shipped = 1, Delivered = 2।  
String enum এর উদাহরণ:** ধরুন, আমরা স্ট্যাটাস define করতে চাই: Pending = "PENDING", Shipped = "SHIPPED", Delivered = "DELIVERED"।  

Enums ব্যবহার করলে code structured এবং understandable হয়।  

---

### 5. Provide an example of using union and intersection types in TypeScript

Union type:** একটি variable একাধিক type নিতে পারে। উদাহরণস্বরূপ, একটি variable হতে পারে string বা number। এটি flexibility দেয়।  
Intersection type:** দুটি বা তার বেশি type একসাথে combine করে নতুন type বানানো। উদাহরণস্বরূপ, একজন ব্যক্তি হতে পারে একজন Employee এবং Student একসাথে, ফলে তার সব প্রোপার্টি থাকবে।  
