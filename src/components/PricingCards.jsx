import React from 'react';

const PricingPlans = () => {
  const [billingCycle, setBillingCycle] = React.useState('monthly');

  return (
    <div className="w-full px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-8">
        <p className="text-sm text-gray-600 mb-2">Choose the perfect plan for you</p>
        <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-3">Pricing plan</h2>
        <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      {/* Billing Toggle */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-full p-1 bg-gray-100">
          <button
            className={`px-6 py-1.5 rounded-full text-sm font-medium transition-colors ${
              billingCycle === 'monthly' ? 'bg-orange-600 text-white' : 'text-gray-600'
            }`}
            onClick={() => setBillingCycle('monthly')}
          >
            Monthly
          </button>
          <button
            className={`px-6 py-1.5 rounded-full text-sm font-medium transition-colors ${
              billingCycle === 'yearly' ? 'bg-orange-600 text-white' : 'text-gray-600'
            }`}
            onClick={() => setBillingCycle('yearly')}
          >
            Yearly
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Basic Plan */}
        <div className="border rounded-lg p-3 bg-white h-[450px] flex flex-col">
          <h3 className="text-lg font-medium mb-1">Basic plan</h3>
          <div className="mb-1">
            <span className="text-3xl font-semibold">$29.99</span>
            <span className="text-sm text-gray-600">/month</span>
          </div>
          <p className="text-xs text-blue-600 mb-3">Save 17% with yearly plan</p>
          <ul className="space-y-1.5 mb-3 flex-grow">
            <li className="flex items-start text-sm">
              <span className="mr-2 text-orange-600 shrink-0">✓</span>
              <span>Access to AI-Powered Virtual Influencer Creation</span>
            </li>
            <li className="flex items-start text-sm">
              <span className="mr-2 text-orange-600 shrink-0">✓</span>
              <span>Generate Brand Ads with AI Assistance</span>
            </li>
            <li className="flex items-start text-sm">
              <span className="mr-2 text-orange-600 shrink-0">✓</span>
              <span>Real-time Preview of Influencers and Ads</span>
            </li>
          </ul>
          <button className="w-full py-2 border border-orange-600 text-orange-600 rounded-lg hover:bg-orange-50 transition-colors text-sm">
            Upgrade to Plan 1
          </button>
        </div>

        {/* Business Plan */}
        <div className="border rounded-lg p-3 bg-white h-[450px] flex flex-col">
          <h3 className="text-lg font-medium mb-1">Business plan</h3>
          <div className="mb-1">
            <span className="text-3xl font-semibold">$49.99</span>
            <span className="text-sm text-gray-600">/month</span>
          </div>
          <p className="text-xs text-blue-600 mb-3">Save 16% with yearly plan</p>
          <ul className="space-y-1.5 mb-3 flex-grow">
            <li className="flex items-start text-sm">
              <span className="mr-2 text-orange-600 shrink-0">✓</span>
              <span>All features from Plan 1</span>
            </li>
            <li className="flex items-start text-sm">
              <span className="mr-2 text-orange-600 shrink-0">✓</span>
              <span>AI-Enhanced Influencer Matching Algorithm</span>
            </li>
            <li className="flex items-start text-sm">
              <span className="mr-2 text-orange-600 shrink-0">✓</span>
              <span>A/B Testing for Ad Campaigns</span>
            </li>
            <li className="flex items-start text-sm">
              <span className="mr-2 text-orange-600 shrink-0">✓</span>
              <span>In-depth Audience Insights</span>
            </li>
          </ul>
          <button className="w-full py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm">
            Upgrade to Plan 2
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="border rounded-lg p-3 bg-orange-50 h-[450px] flex flex-col">
          <h3 className="text-lg font-medium mb-1">Enterprise plan</h3>
          <div className="mb-1">
            <span className="text-3xl font-semibold">$79.99</span>
            <span className="text-sm text-gray-600">/month</span>
          </div>
          <p className="text-xs text-blue-600 mb-3">Save 15% with yearly plan</p>
          <ul className="space-y-1.5 mb-3 flex-grow">
            <li className="flex items-start text-sm">
              <span className="mr-2 text-orange-600 shrink-0">✓</span>
              <span>All features from Plan 2</span>
            </li>
            <li className="flex items-start text-sm">
              <span className="mr-2 text-orange-600 shrink-0">✓</span>
              <span>+ Advanced Influencer Insights Report</span>
            </li>
            <li className="flex items-start text-sm">
              <span className="mr-2 text-orange-600 shrink-0">✓</span>
              <span>+ Custom AI-Generated Content Suggestions</span>
            </li>
            <li className="flex items-start text-sm">
              <span className="mr-2 text-orange-600 shrink-0">✓</span>
              <span>+ Exclusive Access to Premium Influencers Network</span>
            </li>
            <li className="flex items-start text-sm">
              <span className="mr-2 text-orange-600 shrink-0">✓</span>
              <span>+ Priority Ad Campaign Review by Experts</span>
            </li>
          </ul>
          <button className="w-full py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm">
            Upgrade to Plan 3
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
