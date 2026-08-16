export function createObservable() {
    const listeners = new Set<() => void>();

    function subscribe(listener: () => void) {
        listeners.add(listener);

        return () => {
            listeners.delete(listener);
        };
    }

    function notify() {

        listeners.forEach(listener => listener());
    }

    return {
        subscribe,
        notify,
    };
}