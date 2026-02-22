# ⚡ vue-signalz

[![NPM](https://img.shields.io/npm/v/vue-signalz.svg)](https://www.npmjs.com/package/vue-signalz) ![Downloads](https://img.shields.io/npm/dt/vue-signalz.svg) ![Size](https://img.shields.io/bundlephobia/min/vue-signalz)

[LIVE EXAMPLE](https://codesandbox.io/p/devbox/4yt5x9)

---

Lightweight fine-grained reactive signals for Vue 3.

Built on top of `intentx-core-z`, vue-signalz brings signal-style   
reactivity into Vue using `customRef`, with automatic lifecycle cleanup.

---

# Installation

``` bash
npm install vue-signalz
```

---

# Use

## signal

Creates a reactive writable signal.

``` ts
import { signal } from "vue-signalz"

const count = signal(0)

console.log(count()) // read

count.set(1)         // write

```

Inside Vue:

``` vue
<script setup lang="ts">
import { signal } from "vue-signalz"

const count = signal(0)
</script>

<template>
  <button @click="count.set(count() + 1)">
    Count: {{ count() }}
  </button>
</template>
```

---

## computed

Lazy derived signal.

``` ts
import { signal, computed } from "vue-signalz"

const count = signal(2)

const doubled = computed(() => count() * 2)

console.log(doubled.value)

```

-   Lazy evaluation
-   Recomputes only when dependency changes
-   Auto cleanup in Vue components

---

## effect

Runs after component is mounted.

``` ts
import { signal, effect } from "vue-signalz"

const count = signal(0)

effect(() => {
  console.log(count())
})
```

Note:

- Only works inside Vue component

- Automatically cleaned up on unmount

---

## watch

Watch a getter.

``` ts
import { signal, watch } from "vue-signalz"

const count = signal(0)

watch(
  () => count(),
  (value, old) => {
    console.log("new:", value, "old:", old)
  },
  { immediate: true }
)
```

returns:
```ts
const stop = watch(...)
stop()
```

---

## createScope

Group effects and dispose together.

``` ts
import { createScope } from "vue-signalz"

const scope = createScope()

scope.run(() => {
  scope.effect(() => {
    console.log("running inside scope")
  })
})

// later
scope.dispose()
```

Useful for plugins, feature modules, or dynamic systems.

---

## resource

Async reactive resource with loading state.

```ts
import { resource } from "vue-signalz"

const { state, loading, error } = resource(async (signal) => {
  const res = await fetch("/api/user", { signal })
  return res.json()
})
```

Usage:

```ts
console.log(state())   // resolved data
console.log(loading()) // boolean
console.log(error())   // error if exists
```

- Abort previous request automatically
- Race safe
- Auto cleanup on unmount
- Re-runs when reactive dependencies inside loader change

---

## Use Cases

-   Fine-grained performance tuning
-   Signal-style architecture
-   Cross-framework shared reactive core
-   Async state modeling
-   Plugin systems

---

# License

MIT
