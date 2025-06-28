import AethelAudioCaseStudy from './case-studies/AethelAudioCaseStudy';
import HappyEarthCaseStudy from './case-studies/HappyEarthCaseStudy';
import FoodDeliveryCaseStudy from './case-studies/FoodDeliveryCaseStudy';
import ChairCollectionCaseStudy from './case-studies/ChairCollectionCaseStudy';

interface CaseStudyRouterProps {
  caseStudyId: string;
  onClose: () => void;
}

const CaseStudyRouter = ({ caseStudyId, onClose }: CaseStudyRouterProps) => {
  const renderCaseStudy = () => {
    switch (caseStudyId) {
      case 'aethel-audio':
        return <AethelAudioCaseStudy />;
      case 'happy-earth':
        return <HappyEarthCaseStudy />;
      case 'food-delivery':
        return <FoodDeliveryCaseStudy />;
      case 'chair-collection':
        return <ChairCollectionCaseStudy />;
      default:
        return (
          <div className="min-h-screen bg-white flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-slate-900 mb-4">Case Study Not Found</h1>
              <button 
                onClick={onClose}
                className="bg-orange-500 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors duration-300"
              >
                ← Back to Our Work
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      <div className="absolute top-4 right-4 z-10">
        <button 
          onClick={onClose}
          className="bg-slate-900 text-white p-3 rounded-full hover:bg-slate-800 transition-colors duration-300"
        >
          ✕
        </button>
      </div>
      {renderCaseStudy()}
    </div>
  );
};

export default CaseStudyRouter;
