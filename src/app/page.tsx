'use client';

import { HabitStreakCard } from './components/HabitStreakCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Habit Tracker
          </h1>
          <p className="text-lg text-gray-600">
            Track your daily habits and build consistency
          </p>
        </header>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          <HabitStreakCard
            habitName="Morning Exercise"
            currentStreak={5}
            bestStreak={7}
            lastCompleted={new Date()}
          />
          
          <HabitStreakCard
            habitName="Reading"
            currentStreak={12}
            bestStreak={10}
            lastCompleted={new Date()}
          />
          
          <HabitStreakCard
            habitName="Meditation"
            currentStreak={0}
            bestStreak={3}
            lastCompleted={new Date(Date.now() - 86400000)}
          />
          
          <HabitStreakCard
            habitName="Drinking Water"
            currentStreak={3}
            bestStreak={15}
            lastCompleted={new Date()}
          />
          
          <HabitStreakCard
            habitName="Learning Code"
            currentStreak={8}
            bestStreak={8}
            lastCompleted={new Date()}
          />
          
          <HabitStreakCard
            habitName="Early Sleep"
            currentStreak={2}
            bestStreak={6}
            lastCompleted={new Date()}
          />
        </div>
      </div>
    </div>
  );
}