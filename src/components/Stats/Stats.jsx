import React from "react";

const Stats = () => {
  return (
    <div class="bg-linear-to-r from-indigo-600 to-purple-600 text-white py-8">
      <div class="max-w-6xl mx-auto flex justify-around items-center text-center">
        <div class="flex-1 border-r border-white/30 last:border-r-0 px-4">
          <h2 class="text-3xl font-bold">50K+</h2>
          <p class="mt-2 text-sm">Active Users</p>
        </div>

        <div class="flex-1 border-r border-white/30 last:border-r-0 px-4">
          <h2 class="text-3xl font-bold">200+</h2>
          <p class="mt-2 text-sm">Premium Tools</p>
        </div>

        <div class="flex-1 px-4">
          <h2 class="text-3xl font-bold">4.9</h2>
          <p class="mt-2 text-sm">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
