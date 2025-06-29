'use client';

import { HabitStreakCard } from '../components/HabitStreakCard';

export default function HabitStreakExample() {
  return (
    <div className="container mx-auto p-8 scroll-smooth">
      <h1 className="text-3xl font-bold mb-8">Habit Streak Example</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
          lastCompleted={new Date(Date.now() - 86400000)} // Yesterday
        />
      </div>

    </div>
  );
} 