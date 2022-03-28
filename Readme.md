To see the task look at github repository inside task.docx file.

Installation:
```
npm install truconf-figures
```

Usage example:
```
import { Triangle } from 'trueconf-figures';

const miamiToBermuda = 1664;
const bermudaToBritishVirgin = 1548;
const britishVirginToMiami = 1780;

const bermudaTriangle = new Triangle(miamiToBermuda, bermudaToBritishVirgin, britishVirginToMiami);
console.log('Bermuda triangle area: ', bermudaTriangle.getArea(), 'km^2');
console.log('Bermuda triangle perimeter: ', bermudaTriangle.getPerimeter(), 'km');
console.log('Bermuda triangle inscribed radius: ', bermudaTriangle.getInscribedRadius(), 'km');
```
Don't ask me why its bermuda triangle, may be its just enough popular to be here.
