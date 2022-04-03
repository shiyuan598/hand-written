function hanoi(n, src, aux, dst) {
    if (n < 1) {
        return;
    } else {
        hanoi(n - 1, src, dst, aux);
        console.info(`Move ${n} from ${src} to ${dst}.`); 
        hanoi(n - 1, aux, src, dst);
    }
}
hanoi(3, "A", "B", "C");