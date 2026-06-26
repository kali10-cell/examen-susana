import EntradaQR from './components/EntradaQR'

const entradas = [
  {
    id: 'entrada-1',
    nombre: 'Entrada 1',
    token: 'ASTRALYA-ENTRADA-1',
  },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-zinc-50 p-6 text-zinc-950">
      <section className="flex w-full max-w-sm flex-col items-center gap-4 rounded-lg bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-semibold">Entradas</h1>

        {entradas.map((entrada) => (
          <article key={entrada.id} className="flex flex-col items-center gap-3">
            <EntradaQR token={entrada.token} />
            <p className="text-sm font-medium">{entrada.nombre}</p>
          </article>
        ))}
      </section>
    </main>
  )
}
