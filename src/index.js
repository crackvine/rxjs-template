import { interval } from 'rxjs';
import { map, filter } from 'rxjs/operators';

const loggerSubscription = (x) => {
  console.log(x);
};

interval(2000).pipe(
  map((x) => x * 2 + x),
  filter((x) => x % 2 === 0),
).subscribe(loggerSubscription);
