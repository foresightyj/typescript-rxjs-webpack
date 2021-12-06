import { interval } from "rxjs";
import { scan } from "rxjs/operators";

const source = interval(2000);
const messageElement = document.querySelector(".message");

const log = (x) => (messageElement.textContent = x);

source
	.pipe(scan((acc) => acc + 1, 0))
	.subscribe((count) => log(count));
