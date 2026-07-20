import 'react-bootstrap';
import karim from './assets/karim.png';
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
export default function About() {
  return (
  <section dir="rtl">
    <section className="about">
      <h2 class="text-center section-title"> About Madrid Store </h2>
      <p class="text-center">مرحباً بكم في Madrid Store المتخصص في بيع أحدث الهواتف الذكية والإكسسوارات الأصلية ، نحن
        نهتم بتقديم منتجات عالية الجودة وخدمة عملاء ممتازة.</p>
    </section>
    <section className="our-story">
      <h2> Our Story </h2>
      <p> تم إنشاء Madrid Store بهدف توفير أحدث الهواتف الذكية والإكسسوارات الأصلية بأسعار مناسبة للجميع.</p>
    </section>
    <h2 className="h2"> Why Choose Us </h2>
    <section className="choose-us">
      <div class="card">
        <div>📱</div>
        <div class="card-body">
          <h5>احدث الموبايلات</h5>
          <p class="card-text">نوفر أحدث الهواتف الذكية من أشهر الشركات العالمية مثل Apple وXiaomi </p>
        </div>
      </div>
      <div class="card">
        <div>💰</div>
        <div class="card-body">
          <h5>افضل الأسعار </h5>
          <p class="card-text">نقدم أسعار تنافسية وعروض مميزة لضمان أفضل قيمة لعملائنا</p>
        </div>
      </div>
      <div class="card">
        <div>🚚</div>
        <div class="card-body">
          <h5>توصيل سريع </h5>
          <p class="card-text">نقدم خدمة توصيل سريعة وآمنة لضمان وصول الطلبات في أسرع وقت</p>
        </div>
      </div>
      <div class="card">
        <div>⭐</div>
        <div class="card-body">
          <h5>جوده مضنونة </h5>
          <p class="card-text">جميع منتجاتنا أصلية ومضمونة من الموردين المعتمدين وتمتع بضمان الجودة </p>
        </div>
      </div>
    </section>

    <section className="vision">
      <h2>Our Vision</h2>
      <p>
        هدفنا في Madrid Store هو أن نصبح من أفضل المتاجر الإلكترونية المتخصصة في بيع الهواتف الذكية،
        وذلك من خلال تقديم منتجات عالية الجودة وأسعار مناسبة وخدمة عملاء ممتازة.
      </p>

    </section>

    <section className="our-team" dir="ltr">
      <h2> Our Team </h2>
      <div className="team-members">
        <div className="team-member">
          <img src={karim} alt="Karim" />
          <div className="data">
            <h3>Karim Ahmed</h3>
            <p>Frontend Developer</p>
            <div className="icons">
              <a href="https://wa.me/+201091424329" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
              <a href="https://www.facebook.com/share/1AhckofbLq/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="https://www.instagram.com/karim_21177?igsh=NHV2NWV1aDN4b3Rk" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://www.tiktok.com/@k.a.r.i.m.77?_r=1&_t=ZS-91y7FvLZE6H" target="_blank" rel="noopener noreferrer" ><FaTiktok /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>

  )
}