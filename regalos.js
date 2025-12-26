const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];

const findGift = (gifts, giftName, index = 0) => {
    if (index === gifts.length) {
        return `${giftName} no está en la lista.`;
    }
    
    if (gifts[index] === giftName) {
        return `${giftName} está en la posición ${index}.`;
    }
    
    return findGift(gifts, giftName, index + 1);
};

const countGifts = (gifts, index = 0) => {
    if (index === gifts.length) {
        return 0;
    }
    
    return 1 + countGifts(gifts, index + 1);
};

const showAllGifts = (gifts, index = 0) => {
    if (index === gifts.length) {
        return;
    }
    
    console.log(`${index}. ${gifts[index]}`);
    
    showAllGifts(gifts, index + 1);
};

const findGiftsByKeyword = (gifts, keyword, index = 0, found = []) => {
    if (index === gifts.length) {
        return found;
    }
    
    if (gifts[index].toLowerCase().includes(keyword.toLowerCase())) {
        found.push(gifts[index]);
    }
    
    return findGiftsByKeyword(gifts, keyword, index + 1, found);
};

const addGift = (giftName) => {
    gifts.push(giftName);
    console.log(`Regalo "${giftName}" agregado a la lista.`);
};

const showGiftList = () => {
    console.log("=== LISTA DE REGALOS ===");
    showAllGifts(gifts);
    console.log("---------------------------");
};

export { 
    findGift, 
    countGifts, 
    showAllGifts, 
    findGiftsByKeyword, 
    addGift, 
    showGiftList,
    gifts 
};