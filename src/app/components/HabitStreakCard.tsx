'use client';

import { useState } from 'react';
import Card from './Card';

interface HabitStreakCardProps {
  habitName: string;
  currentStreak: number;
  bestStreak: number;
  lastCompleted: Date;
}

export function HabitStreakCard({ 
  habitName, 
  currentStreak, 
  bestStreak, 
  lastCompleted
}: HabitStreakCardProps) {
  // useState hook example
  const [isExpanded, setIsExpanded] = useState(false);
  const [motivationMessage, setMotivationMessage] = useState('');

  // Array examples
  const cities = ['🗼 Paris', '🌴 Bali', '🗽 New York'];
  const streakHistory = [1, 2, 3, 4, 5, 0, 1, 2, 3];
  
  // Template literal examples
  const greeting = `Hello ${habitName} user!`;
  const cardClasses = `
    transition-all duration-300 
    ${isExpanded ? 'scale-105 shadow-lg' : 'scale-100'}
    ${currentStreak > bestStreak ? 'border-green-500' : 'border-gray-200'}
    w-full
  `;

  // Ternary operator examples
  const streakStatus = currentStreak > bestStreak ? 'New Best!' : 'Keep Going!';

  // Array methods examples
  const averageStreak = Math.round(
    streakHistory.reduce((acc, curr) => acc + curr, 0) / streakHistory.length
  );

  // Function to handle motivation
  const getMotivation = () => {
    const messages = [
      "You're doing great!",
      "Keep the momentum going!",
      "Every day counts!",
      "You're building something amazing!"
    ];
    setMotivationMessage(messages[Math.floor(Math.random() * messages.length)]);
  };

  return (
    <Card className={cardClasses}>
      <div className="p-4">
        {/* Template literal in text */}
        <h3 className="text-xl font-bold mb-2">{greeting}</h3>
        
        {/* Array access example */}
        <p className="text-sm text-gray-600 mb-2">
          Current city: {cities[0]}
        </p>

        {/* Ternary operator for conditional rendering */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-sm text-gray-600">Current Streak</p>
            <p className="text-2xl font-bold">{currentStreak} days</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Best Streak</p>
            <p className="text-2xl font-bold">{bestStreak} days</p>
          </div>
        </div>

        {/* Template literal with date */}
        <p className="text-sm mb-2">
          Last completed: {lastCompleted.toLocaleDateString()}
        </p>

        {/* Conditional rendering with && */}
        {currentStreak > 0 && (
          <div className="bg-green-100 p-2 rounded-md mb-2">
            <p className="text-green-800">{streakStatus}</p>
          </div>
        )}

        {/* Array mapping example with key prop */}
        <div className="flex gap-1 mb-4">
          {streakHistory.map((streak, index) => (
            <div
              key={`streak-${index}`}
              className={`
                w-2 h-2 rounded-full
                ${streak > 0 ? 'bg-green-500' : 'bg-red-500'}
                ${index === streakHistory.length - 1 ? 'ring-2 ring-blue-500' : ''}
              `}
            />
          ))}
        </div>

        {/* Anchor link example */}
        <a 
          href="#motivation" 
          className="text-blue-500 hover:text-blue-700 mb-2 block"
          onClick={(e) => {
            e.preventDefault();
            setIsExpanded(!isExpanded);
          }}
        >
          {isExpanded ? 'Show Less' : 'Show More'}
        </a>

        {/* Conditional rendering with ternary */}
        {isExpanded ? (
          <div id="motivation" className="mt-4">
            <p className="text-sm mb-2">Average Streak: {averageStreak} days</p>
            <button
              onClick={getMotivation}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Get Motivation
            </button>
            {motivationMessage && (
              <p className="mt-2 text-sm text-gray-700">{motivationMessage}</p>
            )}
          </div>
        ) : null}
      </div>
    </Card>
  );
} 