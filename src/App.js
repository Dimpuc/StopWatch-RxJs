import {
  buffer,
  debounceTime,
  filter,
  map,
  Observable,
  Subject,
  takeUntil,
} from "rxjs";
import { useEffect, useState } from "react";
import { SApp, STitle } from "./styled";
import { Btn } from "./components/btn/Btn";
import { Carts } from "./components/carts/Carts";

function App() {
  const [time, setTime] = useState(0);
  const [status, setStatus] = useState("stop");
  const stop$ = new Subject();
  const forclick$ = new Subject();

  const start = () => {
    setStatus("start");
  };

  const stop = () => {
    setTime(0);
    setStatus("stop");
  };

  const wait = () => {
    forclick$.next();
    setStatus("wait");
    forclick$.next();
  };

  const reset = () => {
    setTime(0);
  };

  useEffect(() => {
    const timer$ = new Observable((observer) => {
      let secFor = 0;
      const interv = setInterval(() => {
        observer.next((secFor += 1));
      }, 1000);
      return () => clearInterval(interv);
    });

    const doubleClick$ = forclick$.pipe(
      buffer(forclick$.pipe(debounceTime(300))),
      map((clicksWithin300ms) => clicksWithin300ms.length),
      filter((clicksWithin300ms) => clicksWithin300ms === 2)
    );

    const suber$ = timer$
      .pipe(takeUntil(stop$))
      .pipe(takeUntil(doubleClick$))
      .subscribe({
        next: () => {
          if (status === "start") {
            setTime((prev) => prev + 1);
          }
        },
      });

    return () => suber$.unsubscribe();
  }, [status]);

  return (
    <SApp>
      <STitle>stopwatch</STitle>
      <Carts time={time} />
      <Btn start={start} stop={stop} reset={reset} wait={wait} />
    </SApp>
  );
}

export default App;
