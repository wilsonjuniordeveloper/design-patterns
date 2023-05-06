import Subject from "./subject";
import OrderObserver from "./observables/OrderObserver";

const subject = new Subject();
new OrderObserver(subject);

subject.setValue("iphone")