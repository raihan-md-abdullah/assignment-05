What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ANS : getElementById() নির্দিষ্ট ID বিশিষ্ট এলিমেন্ট খুঁজে বের করে। getElementByClassName() নির্দিষ্ট class বিশিষ্ট সব এলিমেন্ট খুঁজে বের করে। querySelector() CSS selector ব্যবহার করে প্রথম ম্যাচ করা এলিমেন্ট খুঁজে বের করে। querySelectorAll() CSS selector ব্যবহার করে সব ম্যাচ করা এলিমেন্ট খুঁজে বের করে। 
How do you create and insert a new element into the DOM?
ANS : নতুন এলিমেন্ট তৈরি করে attributes যোগ করা। তারপর parent element এর মধ্যে যোগ করা। 
What is Event Bubbling and how does it work?
ANS : DOM এ event একটি এলিমেন্ট থেকে শুরু করে উপরের parent এলিমেন্টগুলোর দিকে ধাপে ধাপে যায় এটায় event bubbling ।
What is Event Delegation in JavaScript? Why is it useful?
ANS : একটি parent element এ event listener লাগানো এবং child element এর event handle করা। ডাইনামিক ডোম এর জন্য উপযোগী। 
What is the difference between preventDefault() and stopPropagation() methods?
ANS : preventDefault() event এর default behavior বন্ধ করে। stopPropagation() event bubbling বন্ধ করে। 
