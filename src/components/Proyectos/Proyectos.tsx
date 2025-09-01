import TarjetaProyecto from './TarjetaProyecto';
import proyectos from './../../../data/proyectos.json';

export default function Proyectos() {
  return (
    <section className="py-10">
      <h2
        className="mb-10 text-5xl font-bold text-center text-primaryBg"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        Nuestros Proyectos
      </h2>
      <div className="grid gap-8 px-4 md:grid-cols-2">
        {proyectos.map((proyecto, i) => (
          <TarjetaProyecto
            key={i}
            nombre={proyecto.nombre}
            images={proyecto.images}
            description={
              proyecto.description ? proyecto.description.join(', ') : undefined
            }
          />
        ))}
      </div>
    </section>
  );
}
