import { BookOpen, MessageCircle, MapPin, Send } from 'lucide-react';

export function Footer() {
  return (
    <footer id="about-author" className="bg-[#1A1A1A] text-white py-12 lg:py-16">
      <div className="container-main max-w-4xl">
        {/* Photos */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <img
            src="/images/author1.png"
            alt="Александр Борисович"
            className="w-24 h-24 lg:w-32 lg:h-32 rounded-lg object-cover border-2 border-white/20"
          />
          <img
            src="/images/author2.png"
            alt="Александр Борисович"
            className="w-24 h-24 lg:w-32 lg:h-32 rounded-lg object-cover border-2 border-white/20"
          />
          <img
            src="/images/author3.png"
            alt="Александр Борисович"
            className="w-24 h-24 lg:w-32 lg:h-32 rounded-lg object-cover border-2 border-white/20"
          />
        </div>

        <div className="text-center mb-6">
          <h3 className="text-xl font-bold mb-4">Александр Борисович</h3>
          <p className="text-amber-200/90 font-medium italic mb-4">
            Человек-бардак. Но системный.
          </p>
          <div className="text-white/85 text-sm space-y-3 text-left max-w-2xl mx-auto">
            <p>
              Владимир Седов, основатель «Асконы», однажды сказал: «Предприниматель — это не отличник. Это человек-бардак. Он должен творить.» А если бы он знал меня, он бы точно добавил: «А вот хороший консультант — это человек-бардак с методологией.»
            </p>
            <p>А я — как раз такой.</p>
            <p>
              Когда я прихожу в компанию, я не предлагаю одну «правильную» картинку. Я показываю несколько реальностей, в которых можно жить и работать. Помогаю выбрать ту, что подходит именно вам. А потом, когда пыль уляжется, я:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>собираю из этого хаоса структуру, систему, план,</li>
              <li>с вашей логикой,</li>
              <li>с вашими смыслами.</li>
            </ul>
            <p>
              Я — методолог и систематизатор. И если сначала кажется, что «всё взорвалось» — значит, мы добрались до сути.
            </p>
            <p>
              Я не исправляю то, что «не работает». Я показываю, почему оно не должно было работать изначально, и как сделать иначе, чтобы действительно заработало.
            </p>
            <p>Я не настраиваю KPI. Я показываю, почему их не стоило настраивать так, как вы это делали.</p>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-white mb-3">Что я делаю</h4>
          <ul className="text-white/85 text-sm space-y-1 list-disc list-inside">
            <li>Раздвигаю границы управленческого мышления</li>
            <li>Помогаю разобраться в системных конфликтах внутри бизнеса</li>
            <li>Перевожу философию и концепции в методики и инструменты</li>
            <li>Соединяю модернизм и постмодернизм — выбираю подходящий именно вашему контексту</li>
            <li>Работаю как головой, так и руками: придумаю решение, докручу идею, превращу в методику и внедрю с командой</li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-white mb-3">Образование</h4>
          <ul className="text-white/85 text-sm space-y-1">
            <li>Инженер (системы управления подводной лодкой), СПб ИТМО</li>
            <li>Экономист (финансы и кредит), НОУ «Институт экономики и финансов»</li>
            <li>1000 и 1 различных курсов и тренингов</li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-white mb-3">О себе</h4>
          <ul className="text-white/85 text-sm space-y-1">
            <li>Хожу в театр и на концерты 4–6 раз в месяц</li>
            <li>Посещаю музеи и выставки</li>
            <li>Занимаюсь фитнесом 5 раз в неделю</li>
            <li>Танцую танго, бачату, румбу, фокстрот и ещё несколько</li>
            <li>Иногда играю в шашки</li>
            <li>Читаю, слушаю лекции, веду конспекты и маргиналии</li>
            <li>Могу порекомендовать отличную книгу по любому поводу — просто спросите 😉</li>
          </ul>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-6 text-sm text-white/75">
          <span className="flex items-center gap-1.5">
            <MapPin className="size-4" />
            Санкт-Петербург
          </span>
          <span>•</span>
          <a
            href="https://t.me/AleksandrBorisovich73"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Send className="size-4" />
            @AleksandrBorisovich73
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="https://t.me/ab_dublin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-sm"
          >
            <MessageCircle className="w-4 h-4" />
            Блог в Телеграм
          </a>
          <a
            href="https://dzen.ru/dbs_dubas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-sm"
          >
            <BookOpen className="w-4 h-4" />
            Блог на Дзене
          </a>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/40 text-xs">
            Отчёт основан на данных Ozon Analytics за период 14.02 — 14.03.2026 (28 дней)
          </p>
        </div>
      </div>
    </footer>
  );
}
