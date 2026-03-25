const papers = [
    {
        id: 1,
        title: "ConvoFusion: Multi-Modal Conversational Diffusion for Co-Speech Gesture Synthesis",
        conference: "CVPR 2024",
        authors: "Muhammad Hamza Mughal, Rishabh Dabral, Ikhsanul Habibie, Lucia Donatelli, Marc Habermann, Christian Theobalt",
        abstract: "多模态对话扩散模型，用于对话场景中的协同语音手势生成。支持多人对话场景的手势合成。",
        tags: ["扩散模型", "对话", "多模态"],
        categories: ["cvpr", "diffusion"],
        links: {
            paper: "https://arxiv.org/abs/2403.17936",
            code: "ConvoFusion/convofusion-main",
            project: "https://vcai.mpi-inf.mpg.de/projects/ConvoFusion/"
        },
        detailContent: `
            <div class="paper-detail-content">
                <h4>🎯 核心创新</h4>
                <ul>
                    <li><strong>对话场景建模：</strong>首个支持说话者(Speaker)和倾听者(Listener)联合手势生成的模型</li>
                    <li><strong>Word Excitation Guidance (WEG)：</strong>词级语义控制机制，对特定词汇增强手势</li>
                    <li><strong>TextAudioMotionFuser：</strong>创新的多模态融合模块</li>
                    <li><strong>两阶段训练：</strong>VAE + 扩散模型的训练策略</li>
                </ul>
                
                <h4>🏗️ 模型架构</h4>
                <div class="architecture-mini">
                    <span class="arch-step">文本编码 (T5)</span> →
                    <span class="arch-step">音频编码 (Mel)</span> →
                    <span class="arch-step">TextAudioController</span> →
                    <span class="arch-step">Condition Fuser</span> →
                    <span class="arch-step">Denoiser</span> →
                    <span class="arch-step">VAE Decoder</span>
                </div>
                
                <h4>📊 实验结果</h4>
                <ul>
                    <li>在 BEAT 和 DnD 数据集上达到 SOTA</li>
                    <li>FID、Diversity、Beat Consistency 指标均优于基线方法</li>
                    <li>用户研究显示生成手势更自然、更具对话感</li>
                </ul>
                
                <h4>💡 应用场景</h4>
                <ul>
                    <li>虚拟数字人对话系统</li>
                    <li>游戏 NPC 交互</li>
                    <li>视频会议 Avatar</li>
                    <li>教育培训虚拟角色</li>
                </ul>
                
                <a href="convofusion-detail.html" class="btn btn-detail">查看完整解析 →</a>
            </div>
        `
    },
    {
        id: 2,
        title: "DIDiffGes: Disentangled Implicit Diffusion for Co-Speech Gesture Generation",
        conference: "AAAI 2025",
        authors: "Anonymous Authors",
        abstract: "解耦隐式扩散模型，将手势生成解耦为隐式内容编码和显式运动解码两个阶段，实现高质量、多样化的手势合成。",
        tags: ["扩散模型", "隐式模型", "解耦学习"],
        categories: ["aaai", "diffusion"],
        links: {
            paper: "DIDiffGes/DIDiffGes.pdf",
            code: null
        },
        detailContent: `
            <div class="paper-detail-content">
                <h4>🎯 核心创新</h4>
                <ul>
                    <li><strong>解耦隐式扩散：</strong>将手势生成解耦为隐式内容编码和显式运动解码</li>
                    <li><strong>隐式内容表示：</strong>学习语音到隐式手势内容的紧凑表示</li>
                    <li><strong>显式运动生成：</strong>基于隐式表示生成具体的手势运动序列</li>
                    <li><strong>多样性增强：</strong>通过隐式空间随机采样增加手势多样性</li>
                </ul>
                
                <h4>🏗️ 模型架构</h4>
                <div class="architecture-mini">
                    <span class="arch-step">语音输入</span> →
                    <span class="arch-step">内容编码</span> →
                    <span class="arch-step">隐式扩散</span> →
                    <span class="arch-step">运动解码</span> →
                    <span class="arch-step">手势输出</span>
                </div>
                
                <h4>🔧 关键技术</h4>
                <ul>
                    <li><strong>内容编码器：</strong>64维输入→256维隐藏→128维隐式</li>
                    <li><strong>隐式扩散：</strong>1000步，128维隐式空间</li>
                    <li><strong>运动解码器：</strong>128维→256维→114维输出</li>
                    <li><strong>两阶段训练：</strong>端到端联合优化</li>
                </ul>
                
                <h4>📊 实验结果</h4>
                <ul>
                    <li>解耦控制：内容与形式分离</li>
                    <li>高质量生成：隐式扩散优势</li>
                    <li>多样性增强：隐式空间采样</li>
                    <li>语义一致性：保持语音语义对齐</li>
                </ul>
                
                <h4>💡 应用场景</h4>
                <ul>
                    <li>虚拟数字人手势生成</li>
                    <li>游戏NPC个性化动画</li>
                    <li>影视角色手势制作</li>
                    <li>VR/AR虚拟形象驱动</li>
                </ul>
                
                <a href="didiffges-detail.html" class="btn btn-detail">查看完整解析 →</a>
            </div>
        `
    },
    {
        id: 3,
        title: "Taming Diffusion Models for Audio-Driven Co-Speech Gesture Generation",
        conference: "CVPR 2023",
        authors: "Lingting Zhu, Xian Liu, Xuanyu Liu, Rui Qian, Ziwei Liu, Lequan Yu",
        abstract: "DiffGesture - 驯服扩散模型用于音频驱动的协同语音手势生成。提出扩散音频-手势Transformer和扩散手势稳定器。",
        tags: ["扩散模型", "Transformer", "音频驱动"],
        categories: ["cvpr", "diffusion"],
        links: {
            paper: "https://arxiv.org/abs/2303.09119",
            code: "DiffGesture/DiffGesture-main",
            project: null
        },
        detailContent: `
            <div class="paper-detail-content">
                <h4>🎯 核心创新</h4>
                <ul>
                    <li><strong>Diffusion Audio-Gesture Transformer：</strong>创新的Transformer架构，更好地处理多模态信息和长时序依赖</li>
                    <li><strong>Diffusion Gesture Stabilizer：</strong>扩散手势稳定器，采用退火噪声采样策略消除时间不一致性</li>
                    <li><strong>Classifier-Free Guidance：</strong>隐式分类器自由引导，平衡多样性和手势质量</li>
                    <li><strong>片段级条件生成：</strong>在音频和骨架序列片段上建立扩散条件生成过程</li>
                </ul>
                
                <h4>🏗️ 模型架构</h4>
                <div class="architecture-mini">
                    <span class="arch-step">音频编码 (WavEncoder)</span> →
                    <span class="arch-step">条件融合</span> →
                    <span class="arch-step">DiffusionNet</span> →
                    <span class="arch-step">Transformer</span> →
                    <span class="arch-step">手势输出</span>
                </div>
                
                <h4>🔧 关键技术</h4>
                <ul>
                    <li><strong>WavEncoder：</strong>4层CNN音频编码器，提取音频特征</li>
                    <li><strong>Variance Schedule：</strong>500步线性beta调度</li>
                    <li><strong>Transformer Model：</strong>编码器-解码器结构，4层编码器+4层解码器</li>
                    <li><strong>退火噪声采样：</strong>在最后25步应用特殊采样策略减少抖动</li>
                </ul>
                
                <h4>📊 实验结果</h4>
                <ul>
                    <li>在TED Gesture和TED Expressive数据集上达到SOTA</li>
                    <li>FGD、Beat Consistency等指标显著优于GAN方法</li>
                    <li>更好的模式覆盖率和音频相关性</li>
                    <li>生成手势时间连贯性更强</li>
                </ul>
                
                <h4>💡 应用场景</h4>
                <ul>
                    <li>虚拟主播手势生成</li>
                    <li>演讲视频手势合成</li>
                    <li>数字人动画制作</li>
                    <li>实时手势驱动系统</li>
                </ul>
                
                <h4>📝 训练配置</h4>
                <ul>
                    <li>优化器：Adam，学习率0.0005</li>
                    <li>Batch Size：128</li>
                    <li>训练轮数：500 epochs</li>
                    <li>Classifier-Free Guidance尺度：1.15</li>
                </ul>
                
                <a href="diffgesture-detail.html" class="btn btn-detail">查看完整解析 →</a>
            </div>
        `
    },
    {
        id: 4,
        title: "DiffSHEG: A Diffusion-Based Approach for Real-Time Speech-driven Holistic 3D Expression and Gesture Generation",
        conference: "CVPR 2024",
        authors: "Junming Chen, Yunfei Liu, Jianan Wang, Ailing Zeng, Yu Li, Qifeng Chen",
        abstract: "基于扩散的实时语音驱动整体3D表情和手势生成方法。同时生成手势和面部表情。",
        tags: ["扩散模型", "实时", "表情", "3D"],
        categories: ["cvpr", "diffusion"],
        links: {
            paper: "https://arxiv.org/abs/2401.04747",
            code: "DiffSHEG/DiffSHEG-main",
            project: "https://jeremycjm.github.io/proj/DiffSHEG/"
        },
        detailContent: `
            <div class="paper-detail-content">
                <h4>🎯 核心创新</h4>
                <ul>
                    <li><strong>整体生成框架：</strong>首个实时语音驱动整体3D生成框架，同时生成面部表情和身体手势</li>
                    <li><strong>DDIM快速采样：</strong>采用DDIM采样策略，从1000步减少到25步，实现实时推理</li>
                    <li><strong>HuBERT音频编码：</strong>使用预训练HuBERT模型提取丰富的音频特征</li>
                    <li><strong>周期性位置编码：</strong>创新的Periodic Positional Encoding，更好建模时序依赖</li>
                </ul>
                
                <h4>🏗️ 模型架构</h4>
                <div class="architecture-mini">
                    <span class="arch-step">语音输入</span> →
                    <span class="arch-step">HuBERT编码</span> →
                    <span class="arch-step">Transformer</span> →
                    <span class="arch-step">DDIM采样</span> →
                    <span class="arch-step">表情+手势</span>
                </div>
                
                <h4>🔧 关键技术</h4>
                <ul>
                    <li><strong>MotionTransformer：</strong>8层Transformer，latent_dim=512</li>
                    <li><strong>DDIM采样：</strong>25步快速确定性采样，提速40倍</li>
                    <li><strong>HuBERT：</strong>768维音频特征，包含语义和韵律信息</li>
                    <li><strong>Stylization Block：</strong>时间嵌入调制特征</li>
                </ul>
                
                <h4>📊 实验结果</h4>
                <ul>
                    <li>在BEAT和SHOW数据集上达到SOTA</li>
                    <li>FID: 32.1, FGD: 19.8，优于现有方法</li>
                    <li>Beat Align: 0.89，接近真实数据</li>
                    <li>实时推理能力，适合实际应用</li>
                </ul>
                
                <h4>💡 应用场景</h4>
                <ul>
                    <li>虚拟数字人实时驱动</li>
                    <li>视频会议Avatar动画</li>
                    <li>虚拟助手表情手势生成</li>
                    <li>游戏NPC实时动画</li>
                </ul>
                
                <a href="diffsheg-detail.html" class="btn btn-detail">查看完整解析 →</a>
            </div>
        `
    },
    {
        id: 5,
        title: "EMAGE: Towards Unified Holistic Co-Speech Gesture Generation via Expressive Masked Audio Gesture Modeling",
        conference: "CVPR 2024",
        authors: "Haiyang Liu, Zihao Zhu, Giorgio Becherini, Yichen Peng, Mingyang Su, You Zhou, Naoya Iwamoto, Bo Zheng, Michael J. Black",
        abstract: "通过表达性掩码音频手势建模实现统一的整体协同语音手势生成。同时生成全身和面部动画。",
        tags: ["整体生成", "掩码建模", "全身+面部"],
        categories: ["cvpr"],
        links: {
            paper: "https://arxiv.org/abs/2401.00374",
            code: "EMAGE/PantoMatrix-main",
            project: "https://pantomatrix.github.io/EMAGE/"
        },
        detailContent: `
            <div class="paper-detail-content">
                <h4>🎯 核心创新</h4>
                <ul>
                    <li><strong>统一整体生成框架：</strong>首个同时生成全身手势(SMPLX)和面部表情(FLAME)的统一框架</li>
                    <li><strong>表达性掩码建模：</strong>创新的掩码策略，对音频和姿势进行随机掩码，增强模型鲁棒性</li>
                    <li><strong>VQ-VAE离散表示：</strong>使用VQ-VAE将动作空间离散化，更好建模多模态分布</li>
                    <li><strong>多层级动作生成：</strong>将身体分解为面部、上半身、下半身、手部四个模块分别建模</li>
                </ul>
                
                <h4>🏗️ 模型架构</h4>
                <div class="architecture-mini">
                    <span class="arch-step">音频输入</span> →
                    <span class="arch-step">VQ-VAE编码</span> →
                    <span class="arch-step">掩码建模</span> →
                    <span class="arch-step">Transformer</span> →
                    <span class="arch-step">多模块解码</span> →
                    <span class="arch-step">SMPLX+FLAME</span>
                </div>
                
                <h4>🔧 关键技术</h4>
                <ul>
                    <li><strong>VQ-VAE：</strong>Codebook大小256，4个独立模型分别建模不同部位</li>
                    <li><strong>掩码策略：</strong>Seed frames=4，随机掩码音频和姿势</li>
                    <li><strong>Transformer：</strong>Hidden size=768，多任务输出</li>
                    <li><strong>BEAT2数据集：</strong>76小时，30位说话者，4种语言</li>
                </ul>
                
                <h4>📊 实验结果</h4>
                <ul>
                    <li>Full Body FGD: 0.615，相比CaMN(2.120)提升71%</li>
                    <li>首次实现包括腿部的完整身体生成</li>
                    <li>同时生成高质量FLAME面部动画</li>
                    <li>建模脚步接触，增强真实感</li>
                </ul>
                
                <h4>💡 应用场景</h4>
                <ul>
                    <li>虚拟数字人（全身+面部）</li>
                    <li>游戏角色动画</li>
                    <li>VR/AR虚拟形象</li>
                    <li>影视动画预演</li>
                </ul>
                
                <a href="emage-detail.html" class="btn btn-detail">查看完整解析 →</a>
            </div>
        `
    },
    {
        id: 6,
        title: "GestureDiffuCLIP: CLIP-Guided Diffusion for Co-Speech Gesture Generation",
        conference: "SIGGRAPH 2023",
        authors: "Anonymous Authors",
        abstract: "CLIP引导的扩散模型用于协同语音手势生成，利用文本-图像预训练模型增强语义理解。",
        tags: ["CLIP", "扩散模型", "文本引导"],
        categories: ["siggraph", "diffusion"],
        links: {
            paper: "GestureDiffuCLIP/GestureDiffuCLIP.pdf",
            code: null
        },
        detailContent: `
            <div class="paper-detail-content">
                <h4>🎯 核心创新</h4>
                <ul>
                    <li><strong>CLIP引导生成：</strong>利用CLIP跨模态对齐能力指导扩散模型</li>
                    <li><strong>文本-手势语义对齐：</strong>通过CLIP文本编码器提取语义特征引导生成</li>
                    <li><strong>多模态条件融合：</strong>融合音频节奏和文本语义双重控制</li>
                    <li><strong>语义多样性增强：</strong>在CLIP语义空间中生成多样化手势</li>
                </ul>
                
                <h4>🏗️ 模型架构</h4>
                <div class="architecture-mini">
                    <span class="arch-step">语音+文本</span> →
                    <span class="arch-step">CLIP编码</span> →
                    <span class="arch-step">音频编码</span> →
                    <span class="arch-step">扩散模型</span> →
                    <span class="arch-step">CLIP引导</span> →
                    <span class="arch-step">手势输出</span>
                </div>
                
                <h4>🔧 关键技术</h4>
                <ul>
                    <li><strong>CLIP ViT-L/14：</strong>512维文本特征，跨模态表示</li>
                    <li><strong>分类器引导：</strong>扩散去噪过程中引入CLIP语义梯度</li>
                    <li><strong>多模态融合：</strong>音频64维+文本512维拼接融合</li>
                    <li><strong>两阶段训练：</strong>先训练无条件扩散，再引入CLIP引导</li>
                </ul>
                
                <h4>📊 实验结果</h4>
                <ul>
                    <li>语义一致性显著提升</li>
                    <li>手势多样性增强</li>
                    <li>跨模态对齐效果好</li>
                    <li>可控生成能力强</li>
                </ul>
                
                <h4>💡 应用场景</h4>
                <ul>
                    <li>语义感知的虚拟数字人</li>
                    <li>智能演讲助手</li>
                    <li>游戏角色动画</li>
                    <li>影视预演制作</li>
                </ul>
                
                <a href="gesturediffuclip-detail.html" class="btn btn-detail">查看完整解析 →</a>
            </div>
        `
    },
    {
        id: 10,
        title: "Listen, Denoise, Action! Audio-Driven Motion Synthesis with Diffusion Models",
        conference: "SIGGRAPH 2023",
        authors: "Simon Alexanderson, Rajmund Nagy, Jonas Beskow, Gustav Eje Henter",
        abstract: "使用扩散模型进行音频驱动的运动合成。不仅适用于手势，还适用于舞蹈等多种运动类型。",
        tags: ["扩散模型", "运动合成", "舞蹈"],
        categories: ["siggraph", "diffusion"],
        links: {
            paper: "https://arxiv.org/abs/2211.09707",
            code: "Listen, Denoise, Action!/ListenDenoiseAction-main",
            project: "https://www.speech.kth.se/research/listen-denoise-action/"
        },
        detailContent: `
            <div class="paper-detail-content">
                <h4>🎯 核心创新</h4>
                <ul>
                    <li><strong>TISA Transformer架构：</strong>翻译不变自注意力机制，支持任意长度序列生成</li>
                    <li><strong>统一生成框架：</strong>单一模型支持手势、舞蹈、动作重定向等多种任务</li>
                    <li><strong>高质量数据集：</strong>发布Motorica Dance Dataset专业舞蹈动捕数据</li>
                    <li><strong>多模态条件控制：</strong>支持音频、风格标签、全局条件等条件输入</li>
                </ul>
                
                <h4>🏗️ 模型架构</h4>
                <div class="architecture-mini">
                    <span class="arch-step">音频输入</span> →
                    <span class="arch-step">扩散过程</span> →
                    <span class="arch-step">TISA Transformer</span> →
                    <span class="arch-step">条件融合</span> →
                    <span class="arch-step">动作输出</span>
                </div>
                
                <h4>🔧 关键技术</h4>
                <ul>
                    <li><strong>TISA：</strong>Translation-Invariant Self-Attention，2块8头注意力</li>
                    <li><strong>扩散模型：</strong>150步扩散，线性噪声调度(0.01→0.7)</li>
                    <li><strong>残差网络：</strong>20层残差层，256通道</li>
                    <li><strong>膨胀注意力：</strong>Dilation cycle [0,1,2]，多尺度感受野</li>
                </ul>
                
                <h4>📊 实验结果</h4>
                <ul>
                    <li>在Trinity、ZEGGS、100STYLE、Motorica Dance四个数据集上达到SOTA</li>
                    <li>统一架构支持手势、舞蹈、动作重定向</li>
                    <li>生成动作自然流畅，时间一致性好</li>
                    <li>支持风格插值和条件控制</li>
                </ul>
                
                <h4>💡 应用场景</h4>
                <ul>
                    <li>虚拟数字人对话手势</li>
                    <li>音乐驱动的舞蹈生成</li>
                    <li>动作风格迁移</li>
                    <li>动画辅助制作</li>
                </ul>
                
                <a href="listen-denoise-action-detail.html" class="btn btn-detail">查看完整解析 →</a>
            </div>
        `
    },
    {
        id: 11,
        title: "ProbTalk: Probabilistic Transformer for Diverse Co-Speech Gesture Generation",
        conference: "CVPR 2024",
        authors: "Fei Liu, Zhenyu Zhang, Yansong Tang, Jinpeng Liu, Yuhan Zhang, Yutao Feng, Yuwang Wang, Donglian Qi, Zihan Yan",
        abstract: "概率Transformer用于多样化的协同语音手势生成。通过概率建模实现多样化输出，支持全身动作协调生成。",
        tags: ["Transformer", "概率建模", "多样性", "全身生成"],
        categories: ["cvpr"],
        links: {
            paper: "https://arxiv.org/abs/2404.00368",
            code: "ProbTalk/probtalk-master",
            project: "https://feifeifeiliu.github.io/probtalk/"
        },
        detailContent: `
            <div class="paper-detail-content">
                <h4>🎯 核心创新</h4>
                <ul>
                    <li><strong>概率Transformer架构：</strong>基于概率建模的Transformer，通过VQ-VAE离散化实现多样化生成</li>
                    <li><strong>两阶段训练策略：</strong>PQ-VAE离散化 → Predictor预测 → Refiner优化</li>
                    <li><strong>全身动作协调：</strong>同时生成身体动作和面部表情，保持协调性</li>
                    <li><strong>MaskGIT采样：</strong>并行解码策略，提高推理速度</li>
                </ul>
                
                <h4>🏗️ 模型架构</h4>
                <div class="architecture-mini">
                    <span class="arch-step">音频输入</span> →
                    <span class="arch-step">PQ-VAE编码</span> →
                    <span class="arch-step">Predictor</span> →
                    <span class="arch-step">Refiner</span> →
                    <span class="arch-step">全身输出</span>
                </div>
                
                <h4>🔧 关键技术</h4>
                <ul>
                    <li><strong>PQ-VAE：</strong>Product Quantization，128 code，4分组</li>
                    <li><strong>Transformer：</strong>6层Decoder，8头注意力，512维</li>
                    <li><strong>MaskGIT：</strong>8步并行采样</li>
                    <li><strong>SHOW数据集：</strong>全身动作（SMPLX+FLAME）</li>
                </ul>
                
                <h4>📊 实验结果</h4>
                <ul>
                    <li>在SHOW数据集上达到SOTA性能</li>
                    <li>高多样性：概率建模实现丰富变化</li>
                    <li>协调性：身体-面部动作自然协调</li>
                    <li>高效推理：MaskGIT并行采样加速</li>
                </ul>
                
                <h4>💡 应用场景</h4>
                <ul>
                    <li>虚拟数字人多样化手势</li>
                    <li>游戏NPC对话动画</li>
                    <li>影视动画变体生成</li>
                    <li>VR/AR虚拟形象</li>
                </ul>
                
                <a href="probtalk-detail.html" class="btn btn-detail">查看完整解析 →</a>
            </div>
        `
    },
    {
        id: 12,
        title: "QPGesture: Quantization-Based and Phase-Guided Motion Matching for Natural Speech-Driven Gesture Generation",
        conference: "CVPR 2023",
        authors: "Sicheng Yang, Zhiyong Wu, Minglei Li, Zhensong Zhang, Lei Hao, Weihong Bao, Ming Cheng, Long Xiao",
        abstract: "基于量化和相位引导的动作匹配方法，用于自然的语音驱动手势生成。使用VQ-VAE+KNN检索实现高质量手势。",
        tags: ["VQ-VAE", "KNN检索", "相位引导", "动作匹配"],
        categories: ["cvpr"],
        links: {
            paper: "https://arxiv.org/abs/2305.11094",
            code: "QPGesture/QPGesture-master",
            project: "https://github.com/YoungSeng/QPGesture"
        },
        detailContent: `
            <div class="paper-detail-content">
                <h4>🎯 核心创新</h4>
                <ul>
                    <li><strong>基于检索的生成范式：</strong>使用VQ-VAE+KNN检索，避免神经网络生成的不确定性</li>
                    <li><strong>相位引导机制：</strong>PAE提取动作的周期性特征，确保时间一致性</li>
                    <li><strong>个性化手势：</strong>支持特定说话者的个性化手势生成</li>
                    <li><strong>多特征融合：</strong>WavLM+Wav2Vec+MFCC多种音频特征</li>
                </ul>
                
                <h4>🏗️ 模型架构</h4>
                <div class="architecture-mini">
                    <span class="arch-step">音频输入</span> →
                    <span class="arch-step">VQ-VAE编码</span> →
                    <span class="arch-step">KNN搜索</span> →
                    <span class="arch-step">相位引导</span> →
                    <span class="arch-step">动作输出</span>
                </div>
                
                <h4>🔧 关键技术</h4>
                <ul>
                    <li><strong>VQ-VAE：</strong>Codebook=512，嵌入维度512，3层下采样</li>
                    <li><strong>KNN匹配：</strong>Levenshtein距离，音频特征相似度</li>
                    <li><strong>PAE：</strong>8维相位通道，4秒时间窗口</li>
                    <li><strong>BEAT数据集：</strong>60fps，15个上半身关节</li>
                </ul>
                
                <h4>📊 实验结果</h4>
                <ul>
                    <li>在BEAT数据集上达到SOTA性能</li>
                    <li>生成动作更自然，避免神经网络的不确定性</li>
                    <li>强个性化：支持特定说话者风格</li>
                    <li>时间一致性：相位引导确保流畅</li>
                </ul>
                
                <h4>💡 应用场景</h4>
                <ul>
                    <li>虚拟数字人个性化手势</li>
                    <li>游戏角色对话动画</li>
                    <li>影视动画快速生成</li>
                    <li>VR/AR虚拟形象</li>
                </ul>
                
                <a href="qpgesture-detail.html" class="btn btn-detail">查看完整解析 →</a>
            </div>
        `
    },
    {
        id: 14,
        title: "SemGes: Semantics-aware Co-Speech Gesture Generation using Semantic Coherence and Relevance Learning",
        conference: "ICCV 2025",
        authors: "Lanmiao Liu, Esam Ghaleb, Aslı Özyürek, Zerrin Yumak",
        abstract: "语义感知的协同语音手势生成方法，通过语义一致性学习和语义相关性学习生成与语音语义高度一致的手势。支持Hand+Body分离生成。",
        tags: ["语义学习", "VQ-VAE", "分离生成", "Transformer"],
        categories: ["iccv"],
        links: {
            paper: "https://arxiv.org/abs/2507.19359",
            code: "SemGes/SemGes-main",
            project: "https://semgesture.github.io/"
        },
        detailContent: `
            <div class="paper-detail-content">
                <h4>🎯 核心创新</h4>
                <ul>
                    <li><strong>语义一致性学习：</strong>通过跨模态注意力学习音频-文本-手势的语义对齐</li>
                    <li><strong>语义相关性学习：</strong>根据语义相关性加权重建损失</li>
                    <li><strong>分离式生成：</strong>Hand(228维)和Body(54维)分别编码生成</li>
                    <li><strong>两阶段训练：</strong>VQ-VAE离散化 + 语义Transformer生成</li>
                </ul>
                
                <h4>🏗️ 模型架构</h4>
                <div class="architecture-mini">
                    <span class="arch-step">音频输入</span> →
                    <span class="arch-step">VQ-VAE编码</span> →
                    <span class="arch-step">语义Transformer</span> →
                    <span class="arch-step">语义一致性</span> →
                    <span class="arch-step">手势输出</span>
                </div>
                
                <h4>🔧 关键技术</h4>
                <ul>
                    <li><strong>VQ-VAE：</strong>Hand(228维) + Body(54维)，Codebook=256</li>
                    <li><strong>语义Transformer：</strong>Hidden=768，1层，跨模态注意力</li>
                    <li><strong>音频特征：</strong>HuBERT + Onset/Amplitude</li>
                    <li><strong>数据集：</strong>BEAT + TED Expressive</li>
                </ul>
                
                <h4>📊 实验结果</h4>
                <ul>
                    <li>语义一致性显著提升</li>
                    <li>Hand+Body分离生成更灵活</li>
                    <li>在BEAT和TED数据集上验证</li>
                    <li>30fps帧率，282维姿态</li>
                </ul>
                
                <h4>💡 应用场景</h4>
                <ul>
                    <li>语义感知的虚拟数字人</li>
                    <li>游戏角色对话动画</li>
                    <li>影视语义动画生成</li>
                    <li>VR/AR语义交互</li>
                </ul>
                
                <a href="semges-detail.html" class="btn btn-detail">查看完整解析 →</a>
            </div>
        `
    },
    {
        id: 15,
        title: "TalkSHOW: Generating Holistic 3D Human Motion from Speech",
        conference: "CVPR 2023",
        authors: "Haiyang Liu, Zihao Zhu, Naoya Iwamoto, Yichen Peng, Zhengqing Li, You Zhou, Elif Bozkurt, Bo Zheng",
        abstract: "从语音生成全身3D人体动作的方法，同时生成面部（表情）、身体姿态和手部动作。使用SMPL-X模型和VQ-VAE+PixelCNN架构。",
        tags: ["全身生成", "SMPL-X", "VQ-VAE", "PixelCNN"],
        categories: ["cvpr"],
        links: {
            paper: "https://arxiv.org/abs/2212.04420",
            code: "TalkSHOW/TalkSHOW-main",
            project: "https://talkshow.is.tue.mpg.de/"
        },
        detailContent: `
            <div class="paper-detail-content">
                <h4>🎯 核心创新</h4>
                <ul>
                    <li><strong>全身动作生成：</strong>同时生成面部（表情）、身体姿态和手部动作</li>
                    <li><strong>SMPL-X模型：</strong>统一表示面部、身体和手部</li>
                    <li><strong>VQ-VAE + PixelCNN：</strong>离散化编码+自回归生成</li>
                    <li><strong>多语言支持：</strong>支持英语、法语、歌曲等</li>
                </ul>
                
                <h4>🏗️ 模型架构</h4>
                <div class="architecture-mini">
                    <span class="arch-step">语音输入</span> →
                    <span class="arch-step">面部生成</span> →
                    <span class="arch-step">VQ-VAE编码</span> →
                    <span class="arch-step">PixelCNN</span> →
                    <span class="arch-step">SMPL-X输出</span>
                </div>
                
                <h4>🔧 关键技术</h4>
                <ul>
                    <li><strong>SMPL-X：</strong>表情100维+身体63维+手部90维</li>
                    <li><strong>VQ-VAE：</strong>Codebook=2048，分离式身体+手部</li>
                    <li><strong>PixelCNN：</strong>2048类别，512维，10层</li>
                    <li><strong>音频特征：</strong>MFCC 64维</li>
                </ul>
                
                <h4>📊 实验结果</h4>
                <ul>
                    <li>首次实现语音到全身SMPL-X生成</li>
                    <li>支持英语、法语、歌曲</li>
                    <li>高质量全身动画</li>
                    <li>分离控制面部、身体、手部</li>
                </ul>
                
                <h4>💡 应用场景</h4>
                <ul>
                    <li>虚拟数字人全身动画</li>
                    <li>游戏角色全身对话</li>
                    <li>影视全身表演生成</li>
                    <li>VR/AR全身交互</li>
                </ul>
                
                <a href="talkshow-detail.html" class="btn btn-detail">查看完整解析 →</a>
            </div>
        `
    },
    {
        id: 16,
        title: "GestureHYDRA: Semantic Co-speech Gesture Synthesis via Hybrid Modality Diffusion Transformer and Cascaded-Synchronized Retrieval-Augmented Generation",
        conference: "ICCV 2025",
        authors: "Quanwei Yang, Luying Huang, Kaisiyuan Wang, Jiazhi Guan, Shengyi He, Fengguo Li, Hang Zhou, Lingyun Yu, Yingying Li, Haocheng Feng, Hongtao Xie",
        abstract: "基于混合模态扩散Transformer和级联同步检索增强生成的语义协同语音手势合成方法。采用HYDRA架构和CSRAG策略实现高质量语义感知手势生成。",
        tags: ["扩散Transformer", "检索增强", "语义学习", "多模态"],
        categories: ["iccv"],
        links: {
            paper: "https://arxiv.org/abs/2507.22731",
            code: null,
            project: "https://mumuwei.github.io/GestureHYDRA/"
        },
        detailContent: `
            <div class="paper-detail-content">
                <h4>🎯 核心创新</h4>
                <ul>
                    <li><strong>HYDRA架构：</strong>混合模态扩散Transformer，处理音频、文本、手势多模态</li>
                    <li><strong>CSRAG策略：</strong>级联同步检索增强生成，多粒度对齐音频和手势</li>
                    <li><strong>语义一致性：</strong>语义对齐损失确保手势与语音语义一致</li>
                    <li><strong>混合模态融合：</strong>有效融合音频、文本和时序信息</li>
                </ul>
                
                <h4>🏗️ 模型架构</h4>
                <div class="architecture-mini">
                    <span class="arch-step">音频+文本</span> →
                    <span class="arch-step">HYDRA编码</span> →
                    <span class="arch-step">CSRAG检索</span> →
                    <span class="arch-step">扩散生成</span> →
                    <span class="arch-step">语义手势</span>
                </div>
                
                <h4>🔧 关键技术</h4>
                <ul>
                    <li><strong>HYDRA：</strong>扩散Transformer，12层，768维</li>
                    <li><strong>CSRAG：</strong>3级粒度，粗粒度检索+细粒度同步</li>
                    <li><strong>音频编码：</strong>HuBERT/Wav2Vec</li>
                    <li><strong>文本编码：</strong>BERT/CLIP</li>
                </ul>
                
                <h4>📊 实验结果</h4>
                <ul>
                    <li>SOTA性能：BEAT和TED数据集最优</li>
                    <li>语义一致性显著提升</li>
                    <li>检索增强策略有效</li>
                    <li>多模态融合优势</li>
                </ul>
                
                <h4>💡 应用场景</h4>
                <ul>
                    <li>语义感知的虚拟数字人</li>
                    <li>游戏角色语义动画</li>
                    <li>影视语义表演生成</li>
                    <li>VR/AR语义交互</li>
                </ul>
                
                <a href="gesturehydra-detail.html" class="btn btn-detail">查看完整解析 →</a>
            </div>
        `
    }
];

let posts = [
    {
        id: 1,
        title: "扩散模型在手势生成中的优势是什么？",
        content: "最近看了很多基于扩散模型的论文，比如DiffGesture、ConvoFusion等。相比之前的GAN和VAE方法，扩散模型在手势生成中有什么特别的优势？大家可以讨论一下。",
        author: "ResearchEnthusiast",
        date: "2024-03-15",
        time: "14:30"
    },
    {
        id: 2,
        title: "BEAT数据集的使用经验分享",
        content: "最近在使用BEAT数据集做实验，这个数据集真的很丰富！包含多语言、情感标注，还有全身和面部数据。有几点建议：1) 预处理时注意数据对齐；2) 建议先从英语数据开始；3) 可以结合他们的Blender工具进行可视化。有问题的可以一起交流！",
        author: "DataExplorer",
        date: "2024-03-10",
        time: "09:15"
    }
];

function init() {
    renderPapers(papers);
    renderPosts();
    setupFilters();
    setupNavigation();
}

function renderPapers(papersToRender) {
    const grid = document.getElementById('papersGrid');
    grid.innerHTML = '';
    
    papersToRender.forEach(paper => {
        const card = document.createElement('div');
        card.className = 'paper-card';
        card.dataset.categories = paper.categories.join(',');
        
        let linksHtml = '';
        if (paper.links.paper) {
            const paperUrl = paper.links.paper.startsWith('http') ? paper.links.paper : paper.links.paper;
            linksHtml += `<a href="${paperUrl}" target="_blank">📄 论文</a>`;
        }
        if (paper.links.code) {
            linksHtml += `<a href="#" onclick="alert('代码位于本地目录: ${paper.links.code}'); return false;">💻 代码</a>`;
        }
        if (paper.links.project) {
            linksHtml += `<a href="${paper.links.project}" target="_blank">🌐 项目页</a>`;
        }
        
        let detailSection = '';
        if (paper.detailContent) {
            detailSection = `
                <div class="paper-detail" id="detail-${paper.id}" style="display: none;">
                    ${paper.detailContent}
                </div>
                <button class="btn-expand" onclick="toggleDetail(${paper.id})">
                    <span id="expand-text-${paper.id}">🔍 展开详情</span>
                </button>
            `;
        }
        
        card.innerHTML = `
            <div class="paper-title">${paper.title}</div>
            <div class="paper-conference">${paper.conference}</div>
            <div class="paper-authors">${paper.authors}</div>
            <div class="paper-abstract">${paper.abstract}</div>
            <div class="paper-tags">
                ${paper.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <div class="paper-links">
                ${linksHtml}
            </div>
            ${detailSection}
        `;
        
        grid.appendChild(card);
    });
}

function toggleDetail(paperId) {
    const detailEl = document.getElementById(`detail-${paperId}`);
    const expandText = document.getElementById(`expand-text-${paperId}`);
    
    if (detailEl.style.display === 'none') {
        detailEl.style.display = 'block';
        expandText.textContent = '🔼 收起详情';
    } else {
        detailEl.style.display = 'none';
        expandText.textContent = '🔍 展开详情';
    }
}

function setupFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            const cards = document.querySelectorAll('.paper-card');
            
            cards.forEach(card => {
                if (filter === 'all') {
                    card.classList.remove('hidden');
                } else {
                    const categories = card.dataset.categories.split(',');
                    if (categories.includes(filter)) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                }
            });
        });
    });
}

function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });
}

function renderPosts() {
    const postsList = document.getElementById('postsList');
    postsList.innerHTML = '';
    
    posts.slice().reverse().forEach(post => {
        const postItem = document.createElement('div');
        postItem.className = 'post-item';
        postItem.innerHTML = `
            <div class="post-title">${post.title}</div>
            <div class="post-meta">${post.author} · ${post.date} ${post.time}</div>
            <div class="post-content">${post.content}</div>
        `;
        postsList.appendChild(postItem);
    });
}

function addPost() {
    const titleInput = document.getElementById('postTitle');
    const contentInput = document.getElementById('postContent');
    
    const title = titleInput.value.trim();
    const content = contentInput.value.trim();
    
    if (!title || !content) {
        alert('请填写标题和内容！');
        return;
    }
    
    const now = new Date();
    const newPost = {
        id: posts.length + 1,
        title: title,
        content: content,
        author: '匿名用户',
        date: now.toISOString().split('T')[0],
        time: now.toTimeString().slice(0, 5)
    };
    
    posts.push(newPost);
    renderPosts();
    
    titleInput.value = '';
    contentInput.value = '';
    
    alert('发布成功！');
}

document.addEventListener('DOMContentLoaded', init);