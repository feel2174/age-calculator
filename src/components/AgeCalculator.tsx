'use client';

import { useState } from 'react';

export default function AgeCalculator() {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState<number | null>(null);
  const [error, setError] = useState('');

  const calculateAge = (selectedBirthDate: string) => {
    const today = new Date();
    const birth = new Date(selectedBirthDate);

    if (birth > today) {
      setError('생년월일은 오늘보다 이전이어야 합니다.');
      setAge(null);
      return;
    }

    let nextAge = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      nextAge -= 1;
    }

    setError('');
    setAge(nextAge);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!birthDate) {
      setError('생년월일을 입력해주세요.');
      setAge(null);
      return;
    }

    calculateAge(birthDate);
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="birthDate" className="mb-1 block text-sm font-medium text-gray-700">
            생년월일
          </label>
          <input
            type="date"
            id="birthDate"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            max={new Date().toISOString().split('T')[0]}
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
        >
          나이 계산하기
        </button>
      </form>

      {error && <div className="text-center text-sm text-red-500">{error}</div>}

      {age !== null && !error && (
        <div className="rounded-md bg-blue-50 p-4 text-center">
          <p className="text-lg font-medium text-gray-700">현재 만 나이</p>
          <p className="mt-2 text-3xl font-bold text-blue-600">{age}세</p>
        </div>
      )}

      <div className="mt-8 text-sm text-gray-500">
        <h3 className="mb-2 font-medium text-gray-700">만 나이 계산 방법</h3>
        <ul className="list-inside list-disc space-y-1">
          <li>생년월일을 기준으로 현재 날짜까지의 만 나이를 계산합니다.</li>
          <li>생일이 지나지 않았다면 1살을 뺀 나이가 만 나이입니다.</li>
          <li>생일이 지났다면 현재 나이가 만 나이입니다.</li>
        </ul>
      </div>
    </div>
  );
}
