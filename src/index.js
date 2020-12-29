import { interval } from 'rxjs';
import { map, filter, takeWhile } from 'rxjs/operators';

const loggerSubscription = {
  next: (x) => {
    console.log(x);
  },
  complete: () => { console.log('done'); },
  error: (error) => { console.error(error); },
};

const ticker$ = interval(2000).pipe(
  takeWhile((x) => x < 5),
  map((x) => x * 2 + x),
  filter((x) => x % 2 === 0),
).subscribe(loggerSubscription);

setTimeout(() => { ticker$.unsubscribe(); }, 20000);
