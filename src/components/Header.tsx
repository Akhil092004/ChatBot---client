const Header = () => (
    <div className="bg-gray-900 border-b border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">P</span>
                </div>
                <h1 className="text-xl font-semibold text-white">Perplexity 2.0</h1>
            </div>
            <div className="flex items-center space-x-4">
                <button className="text-gray-400 hover:text-white px-3 py-1 rounded-lg hover:bg-gray-800 transition-colors">
                    HOME
                </button>
                <button className="text-white bg-gray-800 px-3 py-1 rounded-lg hover:bg-gray-700 transition-colors">
                    CHAT
                </button>
                <button className="text-gray-400 hover:text-white px-3 py-1 rounded-lg hover:bg-gray-800 transition-colors">
                    CONTACTS
                </button>
                <button className="text-gray-400 hover:text-white px-3 py-1 rounded-lg hover:bg-gray-800 transition-colors">
                    SETTINGS
                </button>
            </div>
        </div>
    </div>
);

export default Header;