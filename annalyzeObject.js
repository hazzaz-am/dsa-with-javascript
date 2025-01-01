const mySelf = {
	name: "Hazzaz",
	occupation: "Programmer",
	learning: "DSA",
};

// Complexity:  O(N)
console.log(Object.keys(mySelf));

// Complexity:  O(N)
console.log(Object.entries(mySelf));

// Complexity:  O(1)
console.log(mySelf.hasOwnProperty("name"));

const courses = ["js", "ts", "py", "ph"];

// Complexity:  O(1)
courses.push("c");

// Complexity:  O(1)
courses.pop();

// Complexity:  O(1)
console.log(courses[2]);
