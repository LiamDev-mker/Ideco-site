import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface TarjetaProyectoProps {
  nombre: string;
  images: string[];
  description?: string;
}

export default function TarjetaProyecto({
  nombre,
  description,
  images,
}: TarjetaProyectoProps) {
  return (
    <div className="overflow-hidden bg-white shadow-md rounded-xl">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
      >
        {/* Renderizar las imágenes del proyecto */}
        {images.map((foto, i) => (
          <SwiperSlide key={i}>
            <img
              src={foto}
              alt={`${nombre} foto ${i + 1}`}
              className="object-cover w-full h-80"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="p-4">
        <h3 className="mb-2 text-xl font-semibold text-primaryBg">{nombre}</h3>
        {description && <p className="text-sm text-gray-600">{description}</p>}
      </div>
    </div>
  );
}
