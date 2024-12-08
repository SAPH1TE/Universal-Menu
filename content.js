                        (function () {
                            document.querySelectorAll('meta[http-equiv="Content-Security-Policy"]').forEach(c => c.remove());
                            // Utility function to create elements with styles and text
                            const createElement = (type, styles = {}, textContent = '') => {
                                const element = document.createElement(type);
                                Object.assign(element.style, styles);
                                element.textContent = textContent;
                                return element;
                            };

                            const stats = {
                                version: "0.0.0",
                                appName: "Cheat menu",
                                releaseDate: "N/A",
                                updateCount: 0
                            };
                            // Define the module container
                            const modules = {};

                            // Define the `set` method that accepts a module name and a callback function
                            modules.set = function (name, fn) {
                              this[name] = fn;
                            };

                            // Define the "rate" module before it's set
                            modules.set("rate", function (e) {
                              window.rate = parseInt(e) || 500; // Default to 500 if parsing fails
                              localStorage.rate = window.rate;
                            });


                            // the Initalizing menu and 
                            (function() {
                            const iframe = document.createElement('iframe');
                            iframe.style = 'position: fixed; bottom: 20px; right: -100%; width: 300px; height: 60px; border: none; border-radius: 15px; background: rgba(0,0,0,0.8); z-index: 9999; box-shadow: 0 4px 6px rgba(0,0,0,0.3); transition: right 0.5s ease-in-out; overflow: hidden;';
                            iframe.setAttribute('scrolling', 'no');
                            iframe.srcdoc = `<html><head><style>body{margin:0;padding:0;display:flex;justify-content:center;align-items:center;height:100%;color:white;font-family:Arial,sans-serif;font-size:18px;text-align:center;font-weight:bold;}</style></head><body><p>Initalizing menu.. ${stats.version}</p></body></html>`;
                            document.body.appendChild(iframe);
                            setTimeout(() => { iframe.style.right = '20px'; }, 10);
                            setTimeout(() => { let opacity = 1; const fade = setInterval(() => { iframe.style.opacity = (opacity -= 0.05); if (opacity <= 0) { clearInterval(fade); document.body.removeChild(iframe); } }, 50); }, 2000);
                            })();

                            // Auto-run the content replacement for the "name" element
                            const replaceNameContent = () => {
                                try {
                                    const nameElement = document.evaluate(
                                        '//*[@id="name"]',
                                        document,
                                        null,
                                        XPathResult.FIRST_ORDERED_NODE_TYPE,
                                        null
                                    ).singleNodeValue;

                                    if (nameElement) {
                                        nameElement.outerHTML = '<div data-v-4f1310e7="" id="name">SAPH1TE</div>';
                                        console.log('Name element replaced successfully');
                                    }
                                } catch (error) {
                                    console.error('Error replacing name content:', error);
                                }
                            };

                            // Auto-run the content replacement for the list item
                            const replaceListItemContent = () => {
                                try {
                                    const listItem = document.evaluate(
                                        '/html/body/div[2]/div[2]/div[1]/div[2]/ul/li[2]',
                                        document,
                                        null,
                                        XPathResult.FIRST_ORDERED_NODE_TYPE,
                                        null
                                    ).singleNodeValue;

                                    if (listItem) {
                                        listItem.outerHTML = '<li data-v-4f1310e7="">Cheats University</li>';
                                        console.log('List item replaced successfully');
                                    }
                                } catch (error) {
                                    console.error('Error replacing list item:', error);
                                }
                            };

                            // Immediately replace content
                            replaceNameContent();
                            replaceListItemContent();

                            // Create the main window container
                            const windowContainer = createElement('div', {
                                position: 'fixed',
                                top: '50px',
                                left: '50px',
                                width: '600px',
                                height: '500px',
                                backgroundColor: '#2c2c2c',
                                border: '2px solid #444',
                                borderRadius: '12px',
                                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
                                zIndex: '9999',
                                fontFamily: 'Arial, sans-serif',
                                color: '#fff',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column'
                            });

                            // Create header bar
                            const headerBar = createElement('div', {
                                position: 'relative',
                                top: '0',
                                left: '0',
                                width: '100%',
                                backgroundColor: '#212121',
                                color: '#fff',
                                padding: '12px',
                                cursor: 'move',
                                zIndex: '1'
                            }, 'cheats & menu by SAPH1TE');

                            // Create close button
                            const closeButton = createElement('button', {
                                position: 'absolute',
                                top: '5px',
                                right: '30px',
                                backgroundColor: '#f44336',
                                color: 'white',
                                border: 'none',
                                borderRadius: '50%',
                                padding: '8px 12px',
                                cursor: 'pointer',
                                zIndex: '2'
                            }, 'X');

                            // close functionality
                            closeButton.addEventListener('click', () => {
                                if (window.canvasUpdateInterval) {
                                    clearInterval(window.canvasUpdateInterval);
                                }
                                windowContainer.remove();
                            });

                            // Create minimize button
                            const minimizeButton = createElement('button', {
                                position: 'absolute',
                                top: '5px',
                                right: '70px',
                                backgroundColor: '#ff9800',
                                color: 'white',
                                border: 'none',
                                borderRadius: '50%',
                                padding: '8px 12px',
                                cursor: 'pointer',
                                zIndex: '2'
                            }, '_');

                            // Minimize functionality
                            let isMinimized = false;
                            minimizeButton.addEventListener('click', () => {
                                isMinimized = !isMinimized;
                                windowContainer.style.height = isMinimized ? '40px' : '500px';
                                bodyArea.style.display = isMinimized ? 'none' : 'flex';
                                minimizeButton.textContent = isMinimized ? '▴' : '_';
                            });

                            // Append buttons to header
                            headerBar.appendChild(closeButton);
                            headerBar.appendChild(minimizeButton);
                            windowContainer.appendChild(headerBar);

                            // Create body area
                            const bodyArea = createElement('div', {
                                display: 'flex',
                                flex: '1',
                                position: 'relative'
                            });
                            windowContainer.appendChild(bodyArea);

                            // Create sidebar
                            const sidebar = createElement('div', {
                                width: '100px',
                                height: '100%',
                                backgroundColor: '#171717',
                                display: 'flex',
                                flexDirection: 'column',
                                padding: '3px',
                                boxSizing: 'border-box'
                            });
                            bodyArea.appendChild(sidebar);

                            // Create content area
                            const contentArea = createElement('div', {
                                flex: '1',
                                padding: '20px',
                                backgroundColor: '#171717',
                                overflow: 'auto',
                                display: 'flex',
                                flexDirection: 'column'
                            });
                            bodyArea.appendChild(contentArea);

                            // Define sections
                            const sections = {
                                section1: [
                                    {
                                        label: 'Remove Blur',
                                        id: 'checkbox1',
                                        customJS: `
                                            (function() {
                                                const o = "/html/body/div[2]/div[2]/div[2]/div/div/div/div/div[2]/div/div[2]/canvas";
                                                const r = "/html/body/div[2]/div[2]/div[2]/div/div/div/div/div[2]/div/div[3]/div/canvas";
                                                const g = x => document.evaluate(x, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                        
                                                const c = () => {
                                                    try {
                                                        let oC = g(o), rC = g(r);
                                                        if (!oC || !rC) return false;
                                                        const oCtx = oC.getContext("2d"), rCtx = rC.getContext("2d");
                                                        if (!oCtx || !rCtx) return false;
                                                        oC.width = rC.width;
                                                        oC.height = rC.height;
                                                        oCtx.drawImage(rC, 0, 0);
                                                        return true;
                                                    } catch (error) {
                                                        console.error("Canvas update error:", error);
                                                        return false;
                                                    }
                                                };

                                                if (window.canvasUpdateInterval) {
                                                    clearInterval(window.canvasUpdateInterval);
                                                }

                                                window.canvasUpdateInterval = setInterval(() => {
                                                    if (!c()) {
                                                        clearInterval(window.canvasUpdateInterval);
                                                    }
                                                }, 1000);
                                    
                                                const srImages = g('//*[@id="sr-images"]');
                                                if (srImages) {
                                                    while (srImages.firstChild) {
                                                        srImages.removeChild(srImages.firstChild);
                                                    }
                                                }
                                            })();
                                        `
                                    },
                                    {
                                        label: 'High WPM',
                                        id: 'checkbox2',
                                        customJS: 'window.rate = 2500; localStorage.setItem("rate", window.rate);'
                                    },
                                    {
                                        label: 'Auto awnser',
                                        id: 'checkbox6',
                                        customJS: 'null'
                                    },
                                    {
                                        label: 'N/A',
                                        id: 'checkbox4',
                                        customJS: 'null'
                                    },
                                    {
                                        label: 'N/A',
                                        id: 'checkbox5',
                                        customJS: 'null'
                                    },
                                    {
                                        label: 'N/A',
                                        id: 'checkbox3',
                                        customJS: 'null'
                                    },
                                ],
                                section2: [
                                    {
                                        label: 'Cheat 1',
                                        id: 'STmath1',
                                        customJS: 'null'
                                    },
                                    {
                                        label: 'Cheat 2',
                                        id: 'STmath2',
                                        customJS: 'null'
                                    },
                                    {
                                        label: 'Cheat 3',
                                        id: 'STmath3',
                                        customJS: 'null'
                                    },
                                    {
                                        label: 'Cheat 4',
                                        id: 'STmath4',
                                        customJS: 'null'
                                    }
                                ],
                                section3: [], // Custom JS section,
                                section4: [
                                    {
                                        label: 'Setting X',
                                        id: 'checkboxX',
                                        customJS: 'null'
                                    },
                                    {
                                        label: 'Setting Y',
                                        id: 'checkboxY',
                                        customJS: 'null'
                                    },
                                    {
                                        label: 'Setting Z',
                                        id: 'checkboxZ',
                                        customJS: 'null'
                                    },
                                    {
                                        label: 'Setting W',
                                        id: 'checkboxW',
                                        customJS: 'null'
                                    }
                                ]


                        
                            };

                            // Create Apply button
                            const createApplyButton = (sectionKey) => {
                                const button = createElement('button', {
                                    padding: '10px',
                                    marginTop: '20px',
                                    backgroundColor: '#4caf50',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '     8px',
                                    cursor: 'pointer'
                                }, 'Apply');

                                button.addEventListener('click', () => {
                                    const checkboxes = sections[sectionKey].map(({ id, customJS }) => {
                                        const checkbox = document.getElementById(id);
                                        return {
                                            label: checkbox.nextSibling.textContent,
                                            checked: checkbox.checked,
                                            customJS: customJS
                                        };
                                    });

                                    checkboxes.filter(item => item.checked).forEach(item => {
                                        if (item.customJS !== 'null') {
                                            try {
                                                new Function(item.customJS)();
                                                appendDebugMessage(`Executed JS for ${item.label}`);
                                            } catch (error) {
                                                appendDebugMessage(`Error executing JS for ${item.label}: ${error.message}`);
                                            }
                                        }
                                    });
                                });

                                return button;
                            };


                            // Create sidebar buttons
                            const createSidebarButton = (label, targetSection) => {
                                const button = createElement('button', {
                                    padding: '10px',
                                    marginBottom: '10px',
                                    backgroundColor: '#212121',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    textAlign: 'left'
                                }, label);

                                button.addEventListener('click', () => showSection(targetSection));
                                return button;
                            };

                            // Create checkbox elements
                            const createCheckbox = ({ label, id }) => {
                                const container = createElement('div', {
                                    marginBottom: '10px',
                                    width: '100%',
                                    textAlign: 'left'
                                });

                                const checkbox = createElement('input', {
                                    marginRight: '10px'
                                });
                                checkbox.type = 'checkbox';
                                checkbox.id = id;

                                const checkboxLabel = createElement('label', {
                                    textAlign: 'left'
                                }, label);
                                checkboxLabel.setAttribute('for', id);

                                container.appendChild(checkbox);
                                container.appendChild(checkboxLabel);
                                return container;
                            };

                            // Create custom JS section
                            const createCustomJSSection = () => {
                                const container = createElement('div', {
                                    width: '100%'
                                });

                                const textarea = createElement('textarea', {
                                    width: '100%',
                                    height: '100px',
                                    backgroundColor: '#212121',
                                    color: '#fff',
                                    border: '1px solid #555',
                                    padding: '10px',
                                    textAlign: 'left'
                                });
                                textarea.placeholder = 'Enter your custom JavaScript here...';

                                const runButton = createElement('button', {
                                    padding: '10px',
                                    marginTop: '10px',
                                    backgroundColor: '#4caf50',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '8px',
                                    cursor: 'pointer'
                                }, 'Run JS');

                                runButton.addEventListener('click', () => {
                                    try {
                                        const userJS = textarea.value;
                                        if (!userJS.trim()) {
                                            throw new Error('No JavaScript code provided');
                                        }
                                        new Function(userJS)();
                                        appendDebugMessage('Custom JS executed successfully');
                                    } catch (error) {
                                        appendDebugMessage(`Error executing JS: ${error.message}`);
                                    }
                                });

                                const clearLogButton = createElement('button', {
                                    padding: '10px',
                                    marginTop: '10px',
                                    backgroundColor: '#f44336',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    marginLeft: '10px'
                                }, 'Clear Log');

                                clearLogButton.addEventListener('click', () => {
                                    debugLog.textContent = 'Debug log:\n';
                                });

                                container.appendChild(textarea);
                                container.appendChild(runButton);
                                container.appendChild(clearLogButton);

                                return container;
                            };
                        
                            //chatGpt section aka ABSOUTE FUCKING HELL
                            //if you are reading this i just have not made it yet because i am a fat ass 


                            // Show section function
                            const showSection = (sectionKey) => {
                                contentArea.innerHTML = '';

                                if (sectionKey === 'section3') {
                                    contentArea.appendChild(createCustomJSSection());
                                } else {
                                    sections[sectionKey].forEach(option => {
                                        contentArea.appendChild(createCheckbox(option));
                                    });
                                    contentArea.appendChild(createApplyButton(sectionKey));
                                }
                            };

                            // Create and append sidebar buttons
                            Object.keys(sections).forEach((key) => {
                                let sectionName = {
                                    'section1': '📕       Reading Plus',
                                    'section2': '🔢       STmath hacks',
                                    'section3': '💉Custom JS injecting',
                                    'section4': '⚙️           settings'
                                }[key];
                                sidebar.appendChild(createSidebarButton(sectionName, key));
                            });

                            // Create GitHub logo
                            const createGitHubLogo = () => {
                                const logoContainer = createElement('a', {
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'vertically',
                                    marginBottom: '30px'
                                });
                                logoContainer.href = 'https://github.com/yetanotheryouisyellow/ReadingPlusExploit';
                                logoContainer.target = '_blank';

                                const logoImage = createElement('img', {
                                    width: '30px',
                                    height: '30px',
                                    cursor: 'pointer'
                                });
                                logoImage.src = 'https://img.icons8.com/m_sharp/200/FFFFFF/github.png';
                                logoImage.alt = 'GitHub Logo';

                                logoContainer.appendChild(logoImage);
                                return logoContainer;
                            };

                            // Add GitHub logo
                            sidebar.appendChild(createGitHubLogo());

                            // Show initial section
                            showSection('section1');

                            // Create debug log
                            const debugLog = createElement('div', {
                                position: 'absolute',   
                                bottom: '10px',
                                left: '10px',
                                right: '10px',
                                fontSize: '12px',
                                borderRadius: '30px',
                                backgroundColor: '#222',
                                color: '#fff',
                                padding: '10px',
                                maxHeight: '30px',
                                overflowY: 'auto',
                                fontFamily: 'NSimSun, "Microsoft YaHei", "SimSun", sans-serif',
                                textAlign: 'left'  // Add this line
                            });
                            debugLog.textContent = 'Debug log:\n';
                            windowContainer.appendChild(debugLog);

                            // Debug message function
                            const appendDebugMessage = (message) => {
                                debugLog.textContent += `\n${message}`;
                                debugLog.scrollTop = debugLog.scrollHeight;
                            };

                            // Make window draggable
                            headerBar.addEventListener('mousedown', (e) => {
                                const offsetX = e.clientX - windowContainer.offsetLeft;
                                const offsetY = e.clientY - windowContainer.offsetTop;

                                const onMouseMove = (moveEvent) => {
                                    windowContainer.style.left = `${moveEvent.clientX - offsetX}px`;
                                    windowContainer.style.top = `${moveEvent.clientY - offsetY}px`;
                                };

                                const onMouseUp = () => {
                                    document.removeEventListener('mousemove', onMouseMove);
                                    document.removeEventListener('mouseup', onMouseUp);
                                };

                                document.addEventListener('mousemove', onMouseMove);
                                document.addEventListener('mouseup', onMouseUp);
                            });

                            // Append window to document
                            document.body.appendChild(windowContainer);
                        })();
