import { Users, Calculator, Building2, BarChart3 } from 'lucide-react';

/**
 * Built for Modern Finance Teams section
 */
export default function TrustedBy() {
  const roles = [
    { title: 'CFOs', icon: <Users className="w-8 h-8" /> },
    { title: 'Finance Managers', icon: <Calculator className="w-8 h-8" /> },
    { title: 'Business Owners', icon: <Building2 className="w-8 h-8" /> },
    { title: 'Data Analysts', icon: <BarChart3 className="w-8 h-8" /> }
  ];

  return (
    <section className="py-16">
      <div className="text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-12">
          Built for Modern Finance Teams
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {roles.map((role) => (
            <div 
              key={role.title}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-[#BFFD38]/20 rounded-2xl flex items-center justify-center mb-4 text-[#BFFD38]">
                {role.icon}
              </div>
              <p className="text-white font-medium text-sm md:text-base">
                {role.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
