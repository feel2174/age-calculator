import AgeCalculator from '@/components/AgeCalculator';
import Link from 'next/link';

export const metadata = {
  title: '만 나이 계산기 | 정확한 만 나이 계산',
  description: '생년월일을 입력하면 정확한 만 나이를 계산해드립니다. 간단하고 빠른 만 나이 계산기입니다.',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          만 나이 계산기
        </h1>
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
          <AgeCalculator />
        </div>

        {/* 다른 계산기 소개 섹션 */}
        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
            다른 유용한 계산기
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link 
              href="https://bmi.zucca100.com" 
              target="_blank"
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">BMI 계산기</h3>
              <p className="text-gray-600">
                키와 체중을 입력하여 체질량지수(BMI)를 계산하고 건강 상태를 확인해보세요.
              </p>
            </Link>
            
            {/* 추후 다른 계산기 추가 가능 */}
            <div className="block p-6 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
              <h3 className="text-xl font-semibold text-gray-400 mb-2">더 많은 계산기 준비중</h3>
              <p className="text-gray-500">
                곧 더 많은 유용한 계산기들이 추가될 예정입니다.
              </p>
            </div>
          </div>
        </div>

        {/* 사용 방법 안내 섹션 */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            다양한 계산기로 더 건강한 생활을
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            만 나이 계산기와 BMI 계산기를 통해 건강한 생활을 위한 첫걸음을 시작해보세요.
            앞으로 더 많은 유용한 도구들이 추가될 예정입니다.
          </p>
        </div>
      </div>
    </main>
  );
}
