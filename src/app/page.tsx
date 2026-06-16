import Script from "next/script";
import Link from "next/link";
import AgeCalculator from "@/components/AgeCalculator";

export const metadata = {
  title: "만 나이 계산기 | 정확한 나이 계산",
  description:
    "생년월일을 입력하면 정확한 만 나이를 계산해드리는 빠르고 간편한 만 나이 계산기입니다.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-8 text-center text-3xl font-bold text-gray-800 md:text-4xl">
          만 나이 계산기
        </h1>

        <div className="mx-auto mt-8 max-w-6xl lg:grid lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start lg:gap-8">
          <article className="space-y-16">
            <div className="mx-auto max-w-md rounded-lg bg-white p-6 shadow-lg lg:mx-0">
              <AgeCalculator />
            </div>

            <section>
              <h2 className="mb-8 text-center text-2xl font-bold text-gray-800">
                다른 유용한 계산기
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Link
                  href="https://bmi.zucca100.com"
                  target="_blank"
                  className="block rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
                >
                  <h3 className="mb-2 text-xl font-semibold text-blue-600">BMI 계산기</h3>
                  <p className="text-gray-600">
                    키와 체중을 입력하여 체질량지수(BMI)를 계산하고 건강 상태를 확인해보세요.
                  </p>
                </Link>

                <div className="block rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-6">
                  <h3 className="mb-2 text-xl font-semibold text-gray-400">더 많은 계산기 준비 중</h3>
                  <p className="text-gray-500">
                    곧 더 많은 유용한 계산기들을 추가할 예정입니다.
                  </p>
                </div>
              </div>
            </section>

            <section className="rounded-lg bg-white p-4 shadow-md md:p-6">
              <div id="taboola-below-article-thumbnails" />
              <Script id="taboola-below-article" strategy="afterInteractive">
                {`window._taboola = window._taboola || [];
_taboola.push({
  mode: 'alternating-thumbnails-a',
  container: 'taboola-below-article-thumbnails',
  placement: 'Below Article Thumbnails',
  target_type: 'mix'
});`}
              </Script>
            </section>

            <section className="mx-auto max-w-4xl text-center">
              <h2 className="mb-4 text-2xl font-bold text-gray-800">
                다양한 계산기로 더 건강한 일상을
              </h2>
              <p className="mx-auto max-w-2xl text-gray-600">
                만 나이 계산기와 BMI 계산기를 통해 건강한 생활을 위한 첫걸음을 시작해보세요.
                앞으로도 더 많은 유용한 도구들이 추가될 예정입니다.
              </p>
            </section>
          </article>

          <aside className="hidden lg:block">
            <div className="sticky top-8 rounded-lg bg-white p-4 shadow-md">
              <div id="taboola-right-rail-thumbnails" />
              <Script id="taboola-right-rail" strategy="afterInteractive">
                {`window._taboola = window._taboola || [];
_taboola.push({
  mode: 'thumbnails-rr',
  container: 'taboola-right-rail-thumbnails',
  placement: 'Right Rail Thumbnails',
  target_type: 'mix'
});`}
              </Script>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
