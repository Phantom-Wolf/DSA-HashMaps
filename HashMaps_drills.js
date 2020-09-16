const HashMap = require("./hashmaps");

function main() {
	const lotr = new HashMap();

	lotr.MAX_LOAD_RATIO = 0.5;
	lotr.SIZE_RATIO = 3;

	lotr.set("Hobbit", "Bilbo");
	lotr.set("Hobbit", "Frodo");
	lotr.set("Wizard", "Gandalf");
	lotr.set("Human", "Aragorn");
	lotr.set("Elf", "Legolas");
	lotr.set("Maiar", "The Necromancer");
	lotr.set("Maiar", "Sauron");
	lotr.set("RingBearer", "Gollum");
	lotr.set("LadyOfLight", "Galadriel");
	lotr.set("HalfElven", "Arwen");
	lotr.set("Ent", "Treebeard");
	lotr.set("Ent1", "Treebeard");
	lotr.set("Ent2", "Treebeard");
	lotr.set("Ent3", "Treebeard");

	lotr.get("Hobbit");
	lotr.get("Maiar");

	console.log(lotr);
}

main();

function remainder(arr) {
	return arr.map((el) => el % 11);
}

let arr = [10, 22, 31, 4, 15, 28, 17, 88, 59];
console.log(arr);
console.log(remainder(arr));

// ***** Remove Duplicates *****

function removeDuplicates(string) {
	const library = new HashMap();

	let result = "";

	for (let character of string) {
		if (!library.get(character)) {
			// If the char is not in the library, add the char to our result and then add it to the library
			result += character;
			library.set(character, true);
		}
	}

	return result;
}
