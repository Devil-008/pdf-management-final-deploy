import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './animations.css';

const tools = [
    { name: 'Merge PDF', path: '/merge', description: 'Combine multiple PDFs into one single document.', image: '/assets/mergepdf.png', color: 'bg-blue-500' },
    { name: 'Split PDF', path: '/split', description: 'Extract one or more pages from a PDF file.', image: '/assets/splitpdf.png', color: 'bg-green-500' },
    { name: 'Compress PDF', path: '/compress', description: 'Reduce the file size of your PDF document.', image: '/assets/compresspdf.png', color: 'bg-yellow-500' },
    { name: 'Word to PDF', path: '/word-to-pdf', description: 'Convert Microsoft Word files to PDF.', image: '/assets/wordtopdf.png', color: 'bg-sky-500' },
    { name: 'PDF to Word', path: '/pdf-to-word', description: 'Convert PDF files to editable Word documents.', image: '/assets/pdftoword.png', color: 'bg-sky-600' },
    { name: 'JPG to PDF', path: '/jpg-to-pdf', description: 'Convert JPG images to PDF documents.', image: '/assets/jpgtopdf.png', color: 'bg-emerald-500' },
    { name: 'PDF to JPG', path: '/pdf-to-jpg', description: 'Convert PDF pages to JPG images.', image: '/assets/pdftojpg.png', color: 'bg-emerald-600' },
    { name: 'Sign PDF', path: '/sign', description: 'Add your digital signature to PDF documents.', image: '/assets/signpdf.png', color: 'bg-red-500' },
    { name: 'Rotate PDF', path: '/rotate', description: 'Rotate all or specific pages in your PDF.', image: '/assets/rotatepdf.png', color: 'bg-indigo-500' },
    { name: 'Unlock PDF', path: '/unlock', description: 'Remove password protection from a PDF file.', image: '/assets/unlockpdf.png', color: 'bg-purple-500' },
    { name: 'Protect PDF', path: '/protect', description: 'Add a password and protect your PDF file.', image: '/assets/protectpdf.png', color: 'bg-pink-500' },
    { name: 'Add Watermark', path: '/watermark', description: 'Add a text or image watermark to your PDF.', image: '/assets/watermarkpdf.png', color: 'bg-teal-500' },
{ name: 'Excel to PDF', path: '/excel-to-pdf', description: 'Convert Excel files to PDF documents.', image: '/assets/exeltopdf.png', color: 'bg-sky-500' }

];

function HomePage() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <main className="flex-grow container mx-auto px-6 py-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen relative overflow-hidden">
            {/* Premium Floating Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-full blur-xl animate-float animation-delay-1000"></div>
                <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-lg animate-pulse animation-delay-2000"></div>
                <div className="absolute bottom-32 left-1/4 w-28 h-28 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-xl animate-bounce animation-delay-3000"></div>
                <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-gradient-to-br from-indigo-400/20 to-purple-500/20 rounded-full blur-lg animate-ping animation-delay-4000"></div>
                
                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="w-full h-full" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(99, 102, 241, 0.3) 1px, transparent 0)',
                        backgroundSize: '32px 32px'
                    }}></div>
                </div>
            </div>

            {/* PDF Tools Presentation Header */}
            <div className={`text-center transition-all duration-1200 transform ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-16 opacity-0'}`}>
                <div className="relative inline-block mb-8">
                    {/* PDF Tools Badge */}
                    <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4 animate-fade-in-up">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path>
                        </svg>
                        Professional PDF Tools
                    </div>
                    
                    <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 mb-4 animate-gradient tracking-tight leading-tight">
                        All your PDF needs<br />
                        <span className="text-4xl md:text-5xl">in one place</span>
                    </h1>
                    
                    {/* Decorative underline */}
                    <div className="flex justify-center items-center mb-6">
                        <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-3 animate-pulse"></div>
                        <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                    </div>
                </div>
                
                <p className="text-slate-600 mb-12 text-xl font-medium animate-fade-in-up animation-delay-500 max-w-3xl mx-auto leading-relaxed">
                    Transform, convert, and manage your PDF documents with our comprehensive suite of professional tools. 
                    <br className="hidden md:block" />
                    <span className="text-indigo-600 font-semibold">Fast, secure, and completely free.</span>
                </p>
                
                {/* Tools Statistics */}
                <div className="flex justify-center items-center space-x-8 mb-16 animate-fade-in-up animation-delay-700">
                    <div className="text-center">
                        <div className="text-2xl font-bold text-indigo-600">12+</div>
                        <div className="text-sm text-slate-500">PDF Tools</div>
                    </div>
                    <div className="w-px h-8 bg-slate-300"></div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">100%</div>
                        <div className="text-sm text-slate-500">Free</div>
                    </div>
                    <div className="w-px h-8 bg-slate-300"></div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">Secure</div>
                        <div className="text-sm text-slate-500">Processing</div>
                    </div>
                </div>
            </div>

            {/* Tools Grid with Staggered Animation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {tools.map((tool, index) => (
                    <Link 
                        to={tool.path} 
                        key={tool.name} 
                        className={`block transform transition-all duration-700 hover:scale-105 hover:-translate-y-2 animate-fade-in-up ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} group`}
                        style={{ animationDelay: `${index * 150}ms` }}
                    >
                        <div className="relative bg-white/20 backdrop-blur-2xl p-8 rounded-2xl shadow-2xl transition-all duration-500 h-full flex flex-col border border-white/30 overflow-hidden group-hover:bg-white/30 group-hover:border-white/40 group-hover:backdrop-blur-3xl">
                            
                            {/* Glass morphism layers */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent rounded-2xl"></div>
                            <div className="absolute inset-0 bg-gradient-to-tl from-indigo-500/10 via-purple-500/5 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
                            
                            {/* Animated glass border */}
                            <div className="absolute -inset-0.5 bg-gradient-to-br from-indigo-400/20 via-purple-400/20 to-blue-400/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 -z-10"></div>
                            
                            {/* Inner glow effect */}
                            <div className="absolute inset-1 bg-gradient-to-br from-white/20 to-transparent rounded-xl opacity-60"></div>
                            
                            {/* Glass highlight */}
                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
                            <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-white/60 via-transparent to-transparent"></div>
                            
                            {/* Sophisticated Icon Container with Glass Effect */}
                            <div className="relative z-10 w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-white/30 backdrop-blur-xl rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-500 animate-float group-hover:rotate-3 group-hover:scale-110 border border-white/40">
                                
                                {/* Icon glass layers */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-transparent rounded-2xl"></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/20 via-purple-400/20 to-blue-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                {/* Icon highlights */}
                                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent"></div>
                                <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-white/80 via-transparent to-transparent"></div>
                                
                                <img 
                                    src={tool.image} 
                                    alt={tool.name}
                                    className="relative z-10 w-14 h-14 object-contain group-hover:scale-110 transition-transform duration-500 filter group-hover:brightness-110 group-hover:saturate-110 drop-shadow-lg"
                                />
                            </div>
                            
                            {/* Premium Typography with Glass Background */}
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold text-slate-800 text-center mb-3 group-hover:text-indigo-800 transition-colors duration-500 tracking-tight drop-shadow-sm">
                                    {tool.name}
                                </h3>
                                <p className="text-slate-600 text-center text-sm flex-grow group-hover:text-slate-700 transition-colors duration-500 leading-relaxed font-medium drop-shadow-sm">
                                    {tool.description}
                                </p>
                            </div>
                            
                            {/* Premium CTA with Glass Effect */}
                            <div className="mt-6 flex justify-center relative z-10">
                                <div className="flex items-center space-x-2 px-6 py-3 bg-white/20 backdrop-blur-xl border border-white/30 text-indigo-700 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 shadow-lg group-hover:shadow-xl hover:bg-white/30 hover:border-white/40">
                                    {/* CTA glass highlights */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-white/10 rounded-full"></div>
                                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full"></div>
                                    
                                    <span className="text-sm font-semibold relative z-10">Get Started</span>
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}

export default HomePage;
