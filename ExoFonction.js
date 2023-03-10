// Écrivez une fonction qui prend deux nombres comme arguments et renvoie leur somme.

function somme(nb1, nb2) {
    return nb1 + nb2
}

//autre type de fonction
const sommef = (nb1, nb2) => nb1 + nb2

console.log('Voici la somme(12,7) = ' + somme(12,7))
console.log('Voici la somme(12,7) = ' + sommef(12,7))

// Écrivez une fonction qui prend un tableau de nombres et renvoie le plus grand nombre du tableau.
const tabgrand = [2, 4, 6, 8, 10, 7, 13]

function plusgrandnb(tab) {
    return Math.max(...tab)
}

console.log('recherche dans le tableau de la plus grande valeur = ' + plusgrandnb(tabgrand) )

//  Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne de caractères dont toutes les voyelles ont été supprimées.

let caractere = 'Je suis une phrase avec des voyelles qui vont disparaitre !'

function supprvoy(string) {
    string=string.replace(/[aeiouy]/gm, '')
    return string
}

console.log('Voici une phrases sans voyelle : ' + supprvoy(caractere))

// Écrivez une fonction qui prend un tableau de chaînes de caractères et renvoie un tableau de chaînes de caractères triées par ordre alphabétique. 

let tabpays = ['France', 'Allemagne', 'Belgique', 'Luxenbourg', 'Inde']

function trialpha(tab) {
    tab.sort()
    return tab
}

console.log('Ce tableau va être trier par ordre alphabétique : ' + trialpha(tabpays))

// Écrivez une fonction qui prend un nombre en argument et renvoie une chaîne de caractères représentant ce nombre en mots. Par exemple, si l'entrée est 42, la fonction doit retourner "quarante-deux". 
let unite = ['zero','un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf']
let dizaine = ['dix', 'Vingt', 'trente', 'quarante', 'cinquante', 'soixante','soixante-dix', 'quatre-vingt', 'quatre-vingt-dix']
let intru = ['onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize']

function nbenlettre(nb) {
    if (nb < 10){
        return unite[nb]
    }
    else if (10 < nb && nb <= 16) {
        return intru[nb - 11]
    }
    else if (nb % 10 === 0) {
        return dizaine[nb/10 - 1]
    }
    //else if (nb > 10 && nb % 10 != 0 && nb != 91 && nb != 71){
     //   return dizaine[nb.charAt(0) - 1] + unite[nb % 10 -1]
   // }

}

console.log('Le nombre 0 : ' + nbenlettre(0))
console.log('Le nombre 3 : ' + nbenlettre(3))
console.log('Le nombre 15 : ' + nbenlettre(15))
console.log('Le nombre 30 : ' + nbenlettre(30))
console.log('Le nombre 80 : ' + nbenlettre(80))
console.log('Le nombre 85 : ' + nbenlettre(85))

// Écrivez une fonction qui prend un tableau d'objets et un nom de propriété et renvoie un tableau des valeurs de cette propriété dans chaque objet. 

let tabobj = [
    {name:'Yoann', pays:'France'},
    {name:'Luigi', pays:'Italie'},
    {name:'Quantin', pays:'France'},
    {name:'Flo', pays:'France'}
]



function propri(tab, prop) {
    let result = []
    for(element of tab){
        result.push(element[prop]);
    }
    return result
}

console.log('tout les names : ' + propri(tabobj, 'name'));

// Écrivez une fonction qui prend un tableau de nombres et renvoie un tableau de nombres triés par ordre décroissant.

const tabnombre = [2, 4, 6, 8, 10, 7, 13]

function tridecroissant(tab) {
    tab.sort((x, y) => y - x)
    return tab
}

console.log(tridecroissant(tabnombre))

// Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne avec toutes les voyelles en majuscules

let caracteree = 'Je suis une phrase avec toutes les voyelles qui sont en majuscule !'

function voyellemaj(string) {
    string=string.toUpperCase(/[aeiouy]/gm, '')
    return string
}

console.log('Voici une phrases avec les voyelles en majuscule : ' + voyellemaj(caracteree))

// Écrivez une fonction qui prend une chaîne de caractères et renvoie le nombre de voyelles dans cette chaîne.

// Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne avec toutes les consonnes en majuscules.
