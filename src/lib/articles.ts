interface ArticleTypes {
  title: string;
  description: string;
  image: string;
  id: number;
}

const articles: ArticleTypes[] = [
  {
    title: 'Czym jest kompostowanie? ',
    description: `Kompostowanie to przetwarzanie materii organicznej na kompost przez naturalne procesy biochemiczne z udziałem mikroorganizmów. Chociaż definicja może wydawać się skomplikowana, to wytwarzanie kompostu na własną rękę jest naprawdę łatwe i wcale nie wymaga specjalistycznej wiedzy. Kompostownik możemy zrobić nie tylko w ogrodzie ale nawet w domu czy na balkonie. Możemy go zbudować samemu lub kupić gotowe rozwiązania. 
      Kiedy przygotowujemy domowy kompostownik, musimy zwrócić uwagę, czy kompost który powstanie będzie zdatny do użycia. Jeżeli przygotujemy go w odopwiedni sposób, nie będzie on wydzielał żadnego zapachu.`,
    image: 'CzymJest.png',
    id: 1,
  },
  {
    title: 'Czy warto? Zady i Walety',
    description: `
      - Zmniejsza cenę wywozu śmieci z działki.
      - Poprawia kondycję i strukturę gleby,
      - Pozwala uzyskać naturalny nawóz bogaty w składniki pokarmowe dla roślin – pomaga im wyprodukować zdrowe i liczne plony. Nie bez przyczyny nazywany jest czarnym złotem ogrodników,
      - Zwiększa zdolność gleby do zatrzymywania składników odżywczych i wody,
      - Wspiera organizmy glebowe,
      - Wspomaga powrót materiałów organicznych do gleby, tym samym utrzymując je z dala od wysypisk śmieci oraz kanałów wodnych.`,
    image: 'CzyWarto.png',
    id: 2,
  },
  {
    title: 'Kompost kontra nawozy sztuczne',
    description:
      'Przewagą kompostu wyprodukowanego samodzielnie nad nawozami syntetycznymi są jego niezwykłe właściwości wzbogacające glebę. Smutną prawdą o sztucznych nawozach mineralnych jest to, że długotrwałe ich używanie wyjaławia glebę, zamiast ją wzbogacać. Jak wiadomo, nawóz syntetyczny ma postać kryształków składających się m.in. z mikro i makroelementów, ale również chlorku sodu – głównego składnika soli kuchennej. Stosowanie nawozów sztucznych niewiele różni się więc od regularnego zasalania gleby, czego skutkiem jest zaburzenie funkcji życiowych roślin, utrudniając im pobieranie niezbędnych do życia składników z gleby. Spora ilość zawartego w nawozach syntetycznych azotu sprawia z kolei, że rośliny co prawda rosną bardzo szybko, ale nie mają czasu nabyć odporności na choroby, co wymusza konieczność stosowania środków ochrony roślin w postaci np. pestycydów.',
    image: 'KompostKontra.png',
    id: 3,
  },
  {
    title: 'Kompost jest modny!',
    description:
      'Przewagą kompostu wyprodukowanego samodzielnie nad nawozami syntetycznymi są jego niezwykłe właściwości wzbogacające glebę. Smutną prawdą o sztucznych nawozach mineralnych jest to, że długotrwałe ich używanie wyjaławia glebę, zamiast ją wzbogacać. Jak wiadomo, nawóz syntetyczny ma postać kryształków składających się m.in. z mikro i makroelementów, ale również chlorku sodu – głównego składnika soli kuchennej. Stosowanie nawozów sztucznych niewiele różni się więc od regularnego zasalania gleby, czego skutkiem jest zaburzenie funkcji życiowych roślin, utrudniając im pobieranie niezbędnych do życia składników z gleby. Spora ilość zawartego w nawozach syntetycznych azotu sprawia z kolei, że rośliny co prawda rosną bardzo szybko, ale nie mają czasu nabyć odporności na choroby, co wymusza konieczność stosowania środków ochrony roślin w postaci np. pestycydów.',
    image: 'KompostJestModny.jpeg',
    id: 4,
  },
  {
    title: 'Jak działa kompostownik?',
    description:
      'Proces kompostowania jest niczym innym, niż rozpadem materii organicznej w warunkach tlenowych z wytworzeniem humusu, dwutlenku węgla, wody oraz ciepła. Powstanie humusu (próchnicy) polega więc głównie na próchnieniu, czyli rozkładzie materii organicznej. Proces ten bez przerwy odbywa się w glebie z udziałem organizmów glebowych. To, ile próchnicy jest w glebie, zależy od żyjącej i rozkładającej się w niej materii organicznej – im więcej roślin i innych organizmów żywych, tym więcej rozkładającej się materii biologicznej nawożącej glebę:',
    image: 'JakDziala.png',
    id: 5,
  },
];

export default articles;
