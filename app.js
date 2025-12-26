import { 
    findGift, 
    countGifts, 
    findGiftsByKeyword, 
    addGift, 
    showGiftList,
    gifts 
} from './regalos.js';

const iniciarApp = () => {
    console.log("=== BÚSQUEDA DE REGALOS DE NAVIDAD ===");
    console.log("");
    
    showGiftList();
    console.log("");
    
    console.log("=== BÚSQUEDA 1: Regalo que existe ===");
    let giftToFind = "Lego";
    console.log(`Buscando: ${giftToFind}`);
    let resultado = findGift(gifts, giftToFind);
    console.log(resultado);
    console.log("");
    
    console.log("=== BUSQUEDA 2: Regalo que no existe ===");
    giftToFind = "Camión";
    console.log(`Buscando: ${giftToFind}`);
    resultado = findGift(gifts, giftToFind);
    console.log(resultado);
    console.log("");
    
    console.log("=== BUSQUEDA 3: Otro regalo ===");
    giftToFind = "Muñeca";
    console.log(`Buscando: ${giftToFind}`);
    resultado = findGift(gifts, giftToFind);
    console.log(resultado);
    console.log("");
    
    console.log("=== CONTAR REGALOS ===");
    const total = countGifts(gifts);
    console.log(`Total de regalos en la lista: ${total}`);
    console.log("");
    
    console.log("=== BUSCAR POR PALABRA CLAVE ===");
    const keyword = "juguete";
    console.log(`Buscando regalos que contengan: "${keyword}"`);
    const foundGifts = findGiftsByKeyword(gifts, keyword);
    if (foundGifts.length > 0) {
        console.log(`Se encontraron ${foundGifts.length} regalo(s):`);
        for (const gift of foundGifts) {
            console.log(`- ${gift}`);
        }
    } else {
        console.log("No se encontraron regalos con esa palabra.");
    }
    console.log("");
    
    console.log("=== AGREGAR NUEVOS REGALOS ===");
    addGift("Bicicleta");
    addGift("Videojuego");
    console.log("");
    
    showGiftList();
    console.log("");
    
    console.log("=== BUSQUEDA 4: Regalo recien agregado ===");
    giftToFind = "Bicicleta";
    console.log(`Buscando: ${giftToFind}`);
    resultado = findGift(gifts, giftToFind);
    console.log(resultado);
    console.log("");
    
    console.log("=== FIN DEL PROCESO ===");
};

iniciarApp();