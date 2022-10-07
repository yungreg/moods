const hours = [6, 9, 7, 8, 6, 6, 8, 5, 9, 8, 7, 6, 7, 7, 8, 6, 9];
const grumpyHours = [];
const happyHours = [];

for (const timeSlept of hours) {
  if (timeSlept < 7) {
    grumpyHours.push(timeSlept);
  } else {
    happyHours.push(timeSlept);
  }
}
// the code below is printing incorrectly. Somehow, I'm getting the array elements, mid sentence. I think the phrasing of the snetence prints is wrong. I just need the new array's lengths, not the elements from those arrays.
// update:" I solved this by looking for teh LENGTH of the arrays the elements had been moved into after "
console.log(`I was grumpy on ${grumpyHours.length} days.
I was happy on ${happyHours.length} days.`);
