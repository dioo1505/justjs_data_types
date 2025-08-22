const input = document.getElementById('testInput');
        const result = document.getElementById('testResult');

        input.addEventListener('input', function() {
            const value = this.value.trim();
            
            if (!value) {
                result.textContent = 'Qiymat yozib typeof ni tekshiring...';
                return;
            }

            let testValue;
            let output = '';

            try {
                if (value === 'null') {
                    testValue = null;
                } else if (value === 'undefined') {
                    testValue = undefined;
                } else if (value === 'true') {
                    testValue = true;
                } else if (value === 'false') {
                    testValue = false;
                } else if (!isNaN(value) && value !== '') {
                    testValue = Number(value);
                } else {
                    testValue = value;
                }

                const type = typeof testValue;
                output = `typeof ${JSON.stringify(testValue)} = "${type}"`;
                
                if (Array.isArray(testValue)) {
                    output += ' (Array)';
                }
                
            } catch (error) {
                output = 'Xato yuz berdi: ' + error.message;
            }
            
            result.textContent = output;
        });