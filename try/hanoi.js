function hanoi(n, src, aux, dst) {
    if (n > 0) {
        hanoi(n - 1, src, dst, aux );
        console.info(`Move ${n} from ${src} to ${dst}.`);
        hanoi(n - 1, aux, src, dst);
    }
}
hanoi(4, "A", "B", "C");