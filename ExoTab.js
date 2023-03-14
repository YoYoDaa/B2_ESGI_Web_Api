//Créez un tableau contenant les nombres de 1 à 10. Écrivez un programme qui affiche chaque élément du tableau à la console. 

const montab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < montab.length; i++){
    console.log(montab[i])
}

// Créez un tableau contenant les jours de la semaine. Écrivez un programme qui affiche le premier jour de la semaine à la console. 

const montab1 = ['Lundi','Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

console.log(montab1[0])

// Créez un tableau contenant les nombres pairs de 2 à 10. Écrivez un programme qui calcule la somme des nombres du tableau et l'affiche à la console. 

const tabpaire = [2, 4, 6, 8, 10]
let sum = 0;

for (let i = 0; i < tabpaire.length; i++) {
    sum += tabpaire[i];
}
console.log(sum);

//Créez un tableau contenant les noms de cinq fruits. Écrivez un programme qui ajoute un sixième fruit à la fin du tableau et affiche le tableau complet à la console. 

const tabfruit = ['Pomme','Poire', 'Abricot', 'Banane', 'Cerise']

tabfruit.push('Fraise')

console.log(tabfruit)

// Créez un tableau contenant les notes de cinq étudiants. Écrivez un programme qui calcule la moyenne des notes et l'affiche à la console. 

const tabnote = [16, 8, 10, 14, 6]

let sum1 = 0;

for (let i = 0; i < tabnote.length; i++) {
    sum1 += tabnote[i];
}

const moyenne = sum1 / tabnote.length

console.log(moyenne)

// Créez un tableau contenant des noms d'oiseaux. Écrivez un programme qui recherche si un nom spécifique d'oiseau est présent dans le tableau. 

const taboiseaux = ['Perroquet', 'Buse', 'Perderie', 'Corbeau','Pie']

let pos = taboiseaux.indexOf('Pie');

if (pos > 0){
    console.log(`L'oiseau est bien dans le tableau`)
} else {
    console.log(`L'oiseau n'éxiste pas`)
}

// Créez un tableau contenant des noms de pays. Écrivez un programme qui trie le tableau par ordre alphabétique et l'affiche à la console. 

const tabpays = ['France', 'Allemagne', 'Belgique', 'Luxenbourg', 'Inde']

let alpha = tabpays.sort()

console.log(alpha)

// Créez un tableau contenant les noms des mois de l'année. Écrivez un programme qui affiche le troisième élément du tableau. 

const tabmois = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre']

console.log(tabmois[2])

// Créez un tableau contenant des nombres aléatoires. Écrivez un programme qui calcule la valeur minimale et la valeur maximale du tableau et les affiche à la console. 

const tabnb = [16, 8, 10, 14, 6, 2, 45]

let min = Math.min(...tabnb)

let max = Math.max(...tabnb)
console.log(min, max)

// Créez un tableau contenant des phrases. Écrivez un programme qui cherche la phrase la plus longue du tableau et l'affiche à la console.

const tabphrase = [`Je suis la première phrase`, `la deuxième phrase`, `encore une autre phrase ?`]

let indice = 0
let result = 0

for (let i = 0; i < tabphrase.length; i++) {
    if (tabphrase[i].length > indice){
        indice = tabphrase[i].length
        result = i
    }
}

console.log(tabphrase[result])