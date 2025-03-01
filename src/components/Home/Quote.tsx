
export const Quote = () => {
  return (
    <div className="my-32 relative">
      <div className="absolute -top-10 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="relative border border-muted bg-card/80 backdrop-blur-sm rounded-lg shadow-lg p-10">
        <div className="absolute -top-5 left-10 bg-card px-4 py-2 rounded-md border border-muted">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
            <path d="M9.17 14.83L14.83 9.17M14.83 14.83L9.17 9.17M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        <div className="text-white text-2xl font-medium leading-relaxed italic">
          "With great power comes great electricity bill"
        </div>
        
        <div className="absolute -bottom-5 right-10 bg-card px-4 py-2 rounded-md border border-muted">
          <p className="text-lg text-primary font-bold">- Dr. Who</p>
        </div>
      </div>
    </div>
  );
};
