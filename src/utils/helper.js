export const searchRestaurants = (searchText, restaurants) => {
    const filteredData = restaurants.filter((restaurant) => { return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()) })
    return filteredData
}

export const FAQdata = [
    {   
        "id" : "66519fa7fc13ae77d2c63774",
        "que": "1. How does FlavorFusion work?",
        "ans": "FlavorFusion is a user-friendly food ordering platform that connects you with a variety of local restaurants. Simply browse through the menu options, make your selection, place your order, and enjoy delicious meals delivered straight to your doorstep."
    },
    {
        "id" : "66519fa7fc13ae77d2c63775",
        "que": "2. What types of cuisines are available on FlavorFusion",
        "ans": "FlavorFusion offers a diverse range of cuisines to cater to every taste bud. From comforting local favorites to exotic global flavors, you'll find a wide variety of options to choose from."
    },
    {
        "id" : "66519fa7fc13ae77d2c63776",
        "que": "3. How can I track my order?",
        "ans": "Once you've placed your order, you can easily track its status on our website. We provide real-time updates on your order's preparation and delivery progress, so you'll know exactly when your delicious meal will arrive."
    },
    {
        "id" : "66519fa7fc13ae77d2c63777",
        "que": "4. Are there any discounts or loyalty programs available?",
        "ans": "Absolutely! We believe in spoiling our users with exclusive deals, discounts, and loyalty rewards. Keep an eye out for special offers that make your dining experiences even more delightful."
    },
    {
        "id" : "66519fa7fc13ae77d2c63778",
        "que": "5. How long does delivery take?",
        "ans": "Delivery times vary depending on factors such as the restaurant's location, your location, and order volume. Rest assured, we strive to provide accurate estimated delivery times during the checkout process."
    },
    {
        "id" : "66519fa7fc13ae77d2c63779",
        "que": "6. How do I contact customer support?",
        "ans": "Our dedicated customer support team is here to assist you. You can reach out to us through the provided contact information on our website. Whether you have questions, feedback, or need assistance with your order, we're here to help."
    },
    {
        "id" : "66519fa7fc13ae77d2c6377a",
        "que": "7. How do I provide feedback about my experience?",
        "ans": "We value your feedback as it helps us improve our services. You can leave reviews and ratings for restaurants on our platform after you've placed an order. Additionally, you can contact our customer support team to share your thoughts and suggestions. Feel free to customize these FAQs to match the tone and style of your website, and to address any specific features or concerns your users might hav."
    },
    {
        "id" : "66519fa7fc13ae77d2c6377b",
        "que": "8. Is FlavorFusion available in my area?",
        "ans": "To check if we're available in your neighborhood, simply enter your location on our homepage. You'll get a list of local restaurants that you can order from."
    },
    {
        "id" : "66519fa7fc13ae77d2c6377c",
        "que": "9. What happens if there's an issue with my order?",
        "ans": "While we strive for perfection, sometimes things may not go as planned. If you encounter any issues with your order, please contact our customer support team immediately. We'll work diligently to resolve the matter and ensure your satisfaction."
    },
    {
        "id" : "66519fa7fc13ae77d2c6377d",
        "que": "10. Can I order from multiple restaurants in the same order?",
        "ans": "Currently, you can only order from one restaurant at a time. However, you can place separate orders from different restaurants if you wish."
    },
    {
        "id" : "66519fa7fc13ae77d2c6377e",
        "que": "11. Is my personal information secure?",
        "ans": "Yes, we take your privacy seriously. Your personal information and payment details are encrypted and stored securely. For more information, please review our Privacy Policy on our website."
    },
]