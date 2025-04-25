
import React from 'react';
import BotCard from './BotCard';

function YourBotArmy({ army, removeFromArmy, dischargeBot }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {army.length === 0 ? (
        <p>No bots enlisted yet. Click "Enlist" on a bot to add it to your army!</p>
      ) : (
        <div className="bot-grid">
          {army.map(bot => (
            <BotCard 
              key={bot.id} 
              bot={bot} 
              addToArmy={removeFromArmy}
              dischargeBot={dischargeBot}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default YourBotArmy;