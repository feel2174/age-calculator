'use client';

import { useState } from 'react';

export default function AgeCalculator() {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState<number | null>(null);
  const [error, setError] = useState('');

  const calculateAge = (birthDate: string) => {
    const today = new Date();
    const birth = new Date(birthDate);
    
    if (birth > today) {
      setError('생년월일은 오늘 날짜보다 이전이어야 합니다.');
      setAge(null);
      return;
    }

    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }

    setError('');
    setAge(age);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!birthDate) {
      setError('생년월일을 입력해주세요.');
      return;
    }
    calculateAge(birthDate);
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700 mb-1">
            생년월일
          </label>
          <input
            type="date"
            id="birthDate"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            max={new Date().toISOString().split('T')[0]}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          나이 계산하기
        </button>
      </form>

      {error && (
        <div className="text-red-500 text-sm text-center">
          {error}
        </div>
      )}

      {age !== null && !error && (
        <div className="text-center p-4 bg-blue-50 rounded-md">
          <p className="text-lg font-medium text-gray-700">현재 만 나이</p>
          <p className="text-3xl font-bold text-blue-600 mt-2">{age}세</p>
        </div>
      )}

      <div className="mt-8 text-sm text-gray-500">
        <h3 className="font-medium text-gray-700 mb-2">만 나이 계산 방법</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>생년월일을 기준으로 현재 날짜까지의 만 나이를 계산합니다.</li>
          <li>생일이 지나지 않았다면 1살을 뺀 나이가 만 나이입니다.</li>
          <li>생일이 지났다면 현재 나이가 만 나이입니다.</li>
        </ul>
      </div>
    </div>
  );
} 